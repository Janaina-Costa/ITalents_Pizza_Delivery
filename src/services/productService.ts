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

  public async getProductById(id: string) {
    try {
      const response = await api.get(`/product/${id}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  public async updateProduct({
    _id,
    category,
    description,
    image,
    name,
    price,
    size,
  }: IProduct) {
    try {
      const response = await api.put(`/product/update/${_id}`, {
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

  public async deleteProduct(id: string) {
    try {
      const response = await api.delete(`product/remove/${id}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export const productService = new ProductService();
