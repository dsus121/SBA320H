// api.js
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
console.log("API_KEY", API_KEY); // checking
const BASE_URL = "https://partners.every.org/v0.2/search";

let lastFetchTime = 0; // to avoid the dreaded "too many requests" error
const FETCH_INTERVAL = 1000; // 1 second   

export const fetchNonProfits = async (term) => {
    const now = Date.now();
    if (now - lastFetchTime < FETCH_INTERVAL) {
        console.warn('Are you making too many requests?');
        return null;
    }

    try {
        lastFetchTime = now;
        const response = await axios.get(`${BASE_URL}/${term}?apiKey=${API_KEY}`);
        return response.data.nonprofits;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};
/*
// browse by search term
fetch("https://partners.every.org/v0.2/search/{searchTerm}?apiKey=myPublicApiKey");
// browse by cause
fetch("https://partners.every.org/v0.2/browse/{cause}?apiKey=myPublicApiKey");
// get non-profit details
fetch("https://partners.every.org/v0.2/nonprofit/{identifier}?apiKey=myPublicApiKey");


do not put anything else in this file, it is only for the api calls
*/