import axios from 'axios';

export default axios.create({
    baseURL: 'https://jobrun-production.onrender.com/api'
})