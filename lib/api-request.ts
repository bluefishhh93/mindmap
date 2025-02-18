import axios from 'axios';

const apiRequest = axios.create({
    baseURL: 'https://api.example.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export { apiRequest };