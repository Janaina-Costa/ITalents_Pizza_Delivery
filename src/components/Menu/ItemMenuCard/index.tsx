/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/control-has-associated-label */

import { Link } from 'react-router-dom';

import { Image } from '../../Image';

interface IProps {
  idProduct: string;

  data: {
    id?: string;
    name: string;
    description: string;
    src: string;
    alt: string;
    price: number;
    size: string;
  };
}

export const ItemMenuCard = ({ data, idProduct }: IProps) => {
  return (
    <div
      className="w-60  p-2 bg-back-banner bg-cover bg-no-repeat rounded-xl mb-8 overflow-hidden max-sm:w-[80%] max-md:w-[90%] cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out "
      id={idProduct}
      key={data.id}
    >
      <Link to={`/product/${data.id}`} state={data.id}>
        <div>
          <p className="text-left font-semibold text-primary-green-0">
            R$ {data.price}{' '}
          </p>
          <div className="flex items-center justify-center">
            <Image src={data.src} alt={data.alt} className="cursor-pointer" />
          </div>
        </div>

        <div className="text-left flex  justify-between overflow-hidden mt-1">
          <div>
            <h1 className="font-extrabold">{data.name}</h1>
            <p className="text-xs text-gray-400 mt-4 h-8 break-words overflow-hidden text-ellipsis">
              {data.description}
            </p>
          </div>
          <div>
            <p className="mt-1 text-xs text-gray-100">{data.size}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
