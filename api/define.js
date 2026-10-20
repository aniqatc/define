// Vercel serverless function: proxies dictionaryapi.dev so the browser
// never makes a cross-origin request (and never hits CORS).
export default async function handler(req, res) {
  const word = String(req.query.word || '').trim();
  if (!word) {
    return res.status(400).json({ error: 'Missing "word" query parameter.' });
  }

  try {
    const upstream = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`
    );

    if (upstream.status === 404) {
      return res.status(404).json({ error: 'NO_DEFINITION' });
    }
    if (!upstream.ok) {
      return res.status(502).json({ error: 'DICTIONARY_UNAVAILABLE', status: upstream.status });
    }

    const data = await upstream.json();
    // Cache successful lookups at Vercel's edge for a day.
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800');
    return res.status(200).json(data);
  } catch (error) {
    return res.status(502).json({ error: 'DICTIONARY_UNAVAILABLE' });
  }
}
