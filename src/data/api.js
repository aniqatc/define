const API_KEY = process.env.REACT_APP_API_KEY;

async function fetchWordData(word) {
  try {
    const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';
    const response = await fetch(`${BASE_URL}/${word}`);
    const data = await response.json();
    return data[0];
  } catch (error) {
    throw error;
  }
}

async function fetchImages(word) {
  try {
    const BASE_URL = 'https://api.shecodes.io/images/v1/search';
    const response = await fetch(`${BASE_URL}/?query=${word}&key=${API_KEY}`);
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export { fetchWordData, fetchImages };
