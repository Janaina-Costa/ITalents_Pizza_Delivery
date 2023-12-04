import axios from 'axios';

import { API_URL } from '../settings';

const api = axios.create({
  baseURL: `${API_URL}`,
});

export const useApi = () => ({
  signIn: async (email: string, password: string) => {
    const response = await api.post('/login', { email, password });

    return response.data;
  },
});
