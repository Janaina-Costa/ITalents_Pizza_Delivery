/* eslint-disable jsx-a11y/control-has-associated-label */

import { Tote } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import { IPropsItems } from '../../../types/interface/Product';
import { Image } from '../../Image';

interface IProps {
  idProduct: string;
  value: number;
  data: IPropsItems[];
}

export const ItemMenuCard = ({ data, value, idProduct }: IProps) => {
  return (
    <>
      {data.map((item) => (
        <div
          className="w-60  p-2 bg-back-banner bg-cover bg-no-repeat rounded-xl mb-8 overflow-hidden max-sm:w-[80%] max-md:w-[90%] cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out "
          id={idProduct}
          key={item.id}
        >
          <Link to={`/product/${item.id}`} state={item.id}>
            <div>
              <p className="text-left font-semibold">R${item.price} </p>
              <div className="flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="cursor-pointer"
                />
              </div>
            </div>

            <div className="text-left overflow-hidden mt-1">
              <h1 className="font-extrabold">{item.title}</h1>
              <p className="text-xs text-gray-400 h-8 break-words">
                {item.description}
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
      ))}
    </>
  );
};
