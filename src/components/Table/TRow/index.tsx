/* eslint-disable jsx-a11y/control-has-associated-label */
import { Pencil, Trash } from '@phosphor-icons/react';

import { Image } from '../../Image';

interface IProps {
  productId: string;
  productImage: string;
  productName: string;
  productPrice: number;
}

export const TRow = ({
  productId,
  productImage,
  productName,
  productPrice,
}: IProps) => {
  return (
    <tr className="p-8 border-b border-b-stone-500">
      <td className=" px-6 py-4 max-sm:hidden ">
        <p className=" truncate w-full max-md:w-9 ">{productId}</p>{' '}
      </td>
      <td className=" px-6 py-4">
        <Image className="w-20 max-w-full" src={productImage} />
      </td>
      <td className=" px-6 py-4">{productName}</td>
      <td className=" px-6 py-4">R${productPrice}</td>
      <td className=" px-6 py-4">
        <div className="flex justify-start items-center gap-7 max-md:flex-col ">
          <button type="button">
            <Pencil className="text-blue-800" size={24} />
          </button>
          <button type="button">
            <Trash className="text-primary-red-1" size={24} />
          </button>
        </div>
      </td>
    </tr>
  );
};
