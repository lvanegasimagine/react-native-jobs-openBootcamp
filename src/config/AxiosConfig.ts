import axios from 'axios';

export default axios.create({
    baseURL: 'https://jobrun-production.onrender.com/api',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
})