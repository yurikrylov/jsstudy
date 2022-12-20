const BASE_URL = `https://api.datamuse.com`;

export const fetchSynonyms = async (synonym) => {
    const response = await fetch(`${BASE_URL}/words/?rel_syn=${synonym}`)
    return response.json()
}