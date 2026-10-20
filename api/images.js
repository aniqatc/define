// Vercel serverless function: proxies the SheCodes images API so the
// API key stays on the server instead of in the client bundle.
export default async function handler(req, res) {
  const word = String(req.query.word || '').trim();
  if (!word) {
    return res.status(400).json({ error: 'Missing "word" query parameter.' });
  }

  const key = process.env.SHECODES_API_KEY;
  if (!key) {
    return res.status(500).json({ error: 'SHECODES_API_KEY is not set.' });
  }

  try {
    const upstream = await fetch(
      `https://api.shecodes.io/images/v1/search?query=${encodeURIComponent(word)}&key=${key}`
    );
    if (!upstream.ok) {
      return res.status(502).json({ error: 'IMAGES_UNAVAILABLE', status: upstream.status });
    }

    const data = await upstream.json();
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800');
    return res.status(200).json(data);
  } catch (error) {
    return res.status(502).json({ error: 'IMAGES_UNAVAILABLE' });
  }
}
