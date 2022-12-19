const BASE_URL = `https://api.datamuse.com`
export const fetchSynonyms =  (synonym) => {
    return  fetch(`${BASE_URL}/words/?rel_syn=${synonym}`)
        .then((response) => response.json())
}