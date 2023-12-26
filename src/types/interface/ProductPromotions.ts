export interface IPropsItems {
  id?: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  price: number;
}

export interface IPropsProductPromotion {
  idProduct: string;
  items: IPropsItems;
}
