import axios from 'axios';
import { ACCESS_TOKEN, BASE_URL } from '../constants/APIS';

export const axiosApi = axios.create({
    baseURL: `${BASE_URL}/`,
    headers: {
        'Authorization': 'Bearer ' + ACCESS_TOKEN
    }
})