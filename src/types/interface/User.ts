export interface IAdressUser {
  _id?: string;
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
}

export interface IFavoriteProduct {
  _id: string;
}

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  image: string;
  isAdmin?: boolean;
  addresses: IAdressUser[];
  favorite_product: IFavoriteProduct[];
}
