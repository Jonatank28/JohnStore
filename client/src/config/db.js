import axios from 'axios';

export const db = axios.create({
    baseURL: "http://localhost:3333/"
});