import axios from 'axios';

const BASE_URL = 'https://api.adviceslip.com/advice'

export const fetchAdvice = async () => {
    const res = await axios.get(`${BASE_URL}`);
    return res.data;
}