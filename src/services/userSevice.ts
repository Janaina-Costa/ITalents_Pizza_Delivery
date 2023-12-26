/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
import { IAdressUser, IUser } from '../types/User';

import { api } from './api';

type userCreate = Omit<IUser, 'id' | 'addresses' | 'favorite_product'>;

class UserService {
  public async signIn(email: string, password: string) {
    try {
      const response = await api.post('/login', { email, password });

      return response.data;
    } catch (err) {
      console.log('errrr', err);
    }
  }

  public async register({ name, email, image, password, phone }: userCreate) {
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
  }

  public async getUserById(id: string) {
    try {
      const response = await api.get(`/user/${id}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  public async createAddress(
    id: string,
    { cep, complement, neighborhood, number, street }: IAdressUser,
  ) {
    try {
      const response = await api.post(`/user/createAddress/${id}`, {
        cep,
        street,
        number,
        complement,
        neighborhood,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export const userService = new UserService();
