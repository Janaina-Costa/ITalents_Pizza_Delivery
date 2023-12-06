/* eslint-disable consistent-return */
import api from '../services/api';

export const useApi = () => ({
  signIn: async (email: string, password: string) => {
    try {
      const response = await api.post('/login', { email, password });

      return response.data;
    } catch (err) {
      console.log('errrr', err);
    }
  },

  register: async (
    name: string,
    email: string,
    password: string,
    phone: string,
    photoUrl: string,
  ) => {
    try {
      const response = await api.post('/user/create', {
        name,
        email,
        password,
        phone,
        photoUrl,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
});
