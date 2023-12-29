import { ProductCategoryEnum, ProductSizesEnum } from '../enum/Product';

export interface IProduct {
  _id?: string;
  name: string;
  description: string;
  category: ProductCategoryEnum;
  image: string;
  size: '' | ProductSizesEnum;
  price: number;
  quantity?: number;
}
