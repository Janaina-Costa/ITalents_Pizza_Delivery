/* eslint-disable consistent-return */
import { api } from '../services/api';
import { IUser } from '../types/User';

type userCreate = Omit<IUser, 'id' | 'addresses' | 'favorite_product'>;

export const useApi = () => ({
  signIn: async (email: string, password: string) => {
    try {
      const response = await api.post('/login', { email, password });

      return response.data;
    } catch (err) {
      console.log('errrr', err);
    }
  },

  register: async ({ name, email, image, password, phone }: userCreate) => {
    try {
      const response = await api.post('/user/create', {
        name,
        email,
        password,
        phone,
        image,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },

  getUserById: async (id: string) => {
    try {
      const response = await api.get(`/user/${id}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
});
