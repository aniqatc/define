// Vercel serverless function: looks up a word server-side so the browser
// never makes a cross-origin request (and never hits CORS).
//
// 1. Try the Free Dictionary API (dictionaryapi.dev) — richest data, has audio.
// 2. If it fails or doesn't know the word, fall back to Wiktionary and convert
//    the result into the same shape, so the components don't need to change.

const FREE_DICTIONARY_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const WIKTIONARY_URL = 'https://en.wiktionary.org/api/rest_v1/page/definition/';

// The Free Dictionary API rejects Node's default "node" user agent (403), and
// Wikimedia asks API clients to identify themselves with a contact.
const HEADERS = {
  'User-Agent': 'define.aniqa.dev (https://define.aniqa.dev; hello@aniqa.dev)',
  Accept: 'application/json',
};

async function fromFreeDictionary(word) {
  const response = await fetch(FREE_DICTIONARY_URL + encodeURIComponent(word), {
    headers: HEADERS,
  });
  if (response.status === 404) return { notFound: true };
  if (!response.ok) return { failed: true, status: response.status };

  const data = await response.json();
  if (!Array.isArray(data) || !data[0]?.meanings?.length) return { notFound: true };
  return { data };
}

// Wiktionary returns definitions as HTML snippets; the app expects plain text.
function stripHtml(html = '') {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

async function fromWiktionary(word) {
  const response = await fetch(WIKTIONARY_URL + encodeURIComponent(word), {
    headers: HEADERS,
  });
  if (response.status === 404) return { notFound: true };
  if (!response.ok) return { failed: true, status: response.status };

  const json = await response.json();
  const english = Array.isArray(json?.en) ? json.en : [];

  const meanings = english
    .map((entry) => ({
      partOfSpeech: String(entry.partOfSpeech || '').toLowerCase(),
      definitions: (entry.definitions || [])
        .map((def) => {
          const definition = stripHtml(def.definition);
          const rawExample = def.parsedExamples?.[0]?.example || def.examples?.[0];
          const example = rawExample ? stripHtml(rawExample) : undefined;
          return example ? { definition, example } : { definition };
        })
        .filter((def) => def.definition),
      synonyms: [],
      antonyms: [],
    }))
    .filter((meaning) => meaning.definitions.length > 0);

  if (meanings.length === 0) return { notFound: true };

  // Same shape as a Free Dictionary API response (an array of entries).
  return {
    data: [
      {
        word,
        phonetics: [],
        meanings,
        sourceUrls: [`https://en.wiktionary.org/wiki/${encodeURIComponent(word)}`],
      },
    ],
  };
}

async function safely(lookup, word) {
  try {
    return await lookup(word);
  } catch (error) {
    return { failed: true };
  }
}

export default async function handler(req, res) {
  const word = String(req.query.word || '').trim().toLowerCase();
  if (!word) {
    return res.status(400).json({ error: 'Missing "word" query parameter.' });
  }

  const primary = await safely(fromFreeDictionary, word);
  const result = primary.data ? primary : await safely(fromWiktionary, word);

  if (result.data) {
    // Cache successful lookups at Vercel's edge for a day.
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800');
    return res.status(200).json(result.data);
  }

  // Only report "no definition" when both sources were reachable and agreed.
  if (primary.notFound && result.notFound) {
    return res.status(404).json({ error: 'NO_DEFINITION' });
  }

  return res.status(502).json({
    error: 'DICTIONARY_UNAVAILABLE',
    freeDictionaryStatus: primary.status,
    wiktionaryStatus: result.status,
  });
}
