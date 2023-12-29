interface ICartProduct {
  id: string;
  quantity: number;
}

export interface ICart {
  products: ICartProduct;
  totalPrice: number;
  deliveryValue: number;
}
