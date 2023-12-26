import { api } from './api';

class CartService {
  public async createCart(cart: any) {
    try {
      const response = await api.post('/cart/create', cart);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export const cartService = new CartService();
