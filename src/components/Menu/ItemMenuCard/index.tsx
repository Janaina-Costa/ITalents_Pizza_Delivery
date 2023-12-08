/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/control-has-associated-label */

import { Tote } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import { Image } from '../../Image';

interface IProps {
  idProduct: string;
  value: number;
  data: {
    id?: string;
    name: string;
    description: string;
    src: string;
    alt: string;
    price: number;
  };
}

export const ItemMenuCard = ({ data, value, idProduct }: IProps) => {
  return (
    <div
      className="w-60  p-2 bg-back-banner bg-cover bg-no-repeat rounded-xl mb-8 overflow-hidden max-sm:w-[80%] max-md:w-[90%] cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out "
      id={idProduct}
      key={data.id}
    >
      <Link to={`/product/${data.id}`} state={data.id}>
        <div>
          <p className="text-left font-semibold">R${data.price} </p>
          <div className="flex items-center justify-center">
            <Image src={data.src} alt={data.alt} className="cursor-pointer" />
          </div>
        </div>

        <div className="text-left overflow-hidden mt-1">
          <h1 className="font-extrabold">{data.name}</h1>
          <p className="text-xs text-gray-400 h-8 break-words">
            {data.description}
          </p>
        </div>
      </Link>

      <div className="flex gap-4 items-center mt-2">
        <div className="flex gap-2 bg-gray-800 px-2 rounded-xl">
          <button type="button">+</button>
          <span>{value}</span>
          <button type="button">-</button>
        </div>
        <button
          type="button"
          className="bg-gradient-to-r from-primary-green-1 from-0% to-primary-green-3 to-100% rounded-2xl px-2"
        >
          <Tote size={24} color="#ffffff" weight="regular" />
        </button>
      </div>
    </div>
  );
};
