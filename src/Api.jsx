import axios from 'axios';

const BASE_URL = 'https://api.adviceslip.com/advice'
const QUOTE_URL = 'https://api.api-ninjas.com/v1/quotes'
const apiKey = import.meta.env.VITE_API_KEY


export const fetchAdvice = async () => {
    const res = await axios.get(`${BASE_URL}`);
    return res.data;
}

export const fetchQuote = async () => {
    const res = await axios.get(`${QUOTE_URL}?X-Api-Key=${apiKey}`);
    return res.data;
}