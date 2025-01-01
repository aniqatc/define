const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

async function fetchWordData(word) {
    try {
        const response = await fetch(`${BASE_URL}/${word}`);
        const data = await response.json();
        return data[0];
    } catch (error) {
        throw error;
    }
}

export { fetchWordData };