import axios from 'axios';

import { API_URL } from '../settings';

console.log(API_URL);

const api = axios.create({
  baseURL: `${API_URL}`,
});

export const useApi = () => ({
  signIn: async (email: string, password: string) => {
    const response = await api.post('/login', { email, password });
    console.log(response.data);

    return response.data;
  },
});
