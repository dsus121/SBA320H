import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://partners.every.org/v0.2/search/";

let lastFetchTime = 0; // to avoid the dreaded "too many requests" error
const FETCH_INTERVAL = 1000; // 1 second   

export const fetchNonProfits = async (cause) => {
    const now = Date.now();
    if (now - lastFetchTime < FETCH_INTERVAL) {
        console.warn('Are you making too many requests?');
        return null;
    }

    try {
        lastFetchTime = now;
        // Log the URL we're trying to fetch (for debugging)
        const url = `${BASE_URL}${cause}?apiKey=${API_KEY}`;
        console.log('Fetching URL:', url);
        
        const response = await axios.get(url);
        console.log('Response:', response.data);
        
        // Check if the nonprofits property exists in the response
        if (response.data && response.data.nonprofits) {
            return response.data.nonprofits;
        } else {
            console.error('Unexpected response structure:', response.data);
            return [];
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};