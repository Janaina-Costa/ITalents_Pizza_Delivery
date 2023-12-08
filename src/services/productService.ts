import { IProduct } from '../types/Product';

import { api } from './api';

class ProductService {
  public async createProduct({
    category,
    description,
    image,
    name,
    price,
    size,
  }: IProduct) {
    try {
      const response = await api.post('/product/create', {
        name,
        description,
        category,
        image,
        price,
        size,
      });

      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  public async getAllProducts() {
    try {
      const response = await api.get('/products');
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export const productService = new ProductService();
