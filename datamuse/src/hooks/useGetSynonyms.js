import { useState } from "react";
import { fetchSynonyms } from "../api/fetchSynonyms";

export const useGetSynonyms = () => {
    const [synonyms, setSynonyms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getSynonyms = async (word) => {
        setIsLoading(true)
        const synonyms = await fetchSynonyms(word)
        setSynonyms(synonyms)
        setIsLoading(false);
    }
    return { isLoading, getSynonyms, synonyms }
}