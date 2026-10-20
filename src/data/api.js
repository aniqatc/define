// Both calls go through our own Vercel functions in /api,
// so the browser only ever talks to define.aniqa.dev.

async function fetchWordData(word) {
  const response = await fetch(`/api/define?word=${encodeURIComponent(word)}`);

  if (response.status === 404) {
    const error = new Error(`No definition found for the word: "${word}"`);
    error.code = 'NO_DEFINITION';
    throw error;
  }
  if (!response.ok) {
    const error = new Error(
      'The dictionary service is unavailable right now. Please try again later.'
    );
    error.code = 'SERVICE_UNAVAILABLE';
    throw error;
  }

  const data = await response.json();
  return data[0];
}

async function fetchImages(word) {
  const response = await fetch(`/api/images?word=${encodeURIComponent(word)}`);
  if (!response.ok) {
    throw new Error('Images unavailable');
  }
  return response.json();
}

export { fetchWordData, fetchImages };
