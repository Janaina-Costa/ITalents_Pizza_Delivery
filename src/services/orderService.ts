import { api } from './api';

class OrderService {
  public async createOrder(order: any) {
    try {
      const response = await api.post('/order/create', order);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  public async findAllOrder() {
    try {
      const response = await api.get('/orders');
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export const orderService = new OrderService();
