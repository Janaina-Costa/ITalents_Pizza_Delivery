interface ICartProduct {
  id: string;
  quantity: number;
}

export interface IOrder {
  products: ICartProduct;
  totalPrice: number;
  deliveryValue: number;
  orderCompleted: boolean;
}
