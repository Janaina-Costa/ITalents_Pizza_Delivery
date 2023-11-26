/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable arrow-body-style */
import { Basket } from '@phosphor-icons/react';

import temp from '../../../assets/napolitana.png';

export const ItemMenuCard = () => {
  return (
    <div className="w-44 p-2 bg-back-banner rounded-xl">
      <div>
        <p className="text-left font-semibold">R$3,00</p>
        <div className="flex items-center justify-center">
          <img src={temp} alt="" />
        </div>
      </div>

      <div className="text-left overflow-hidden mt-1">
        <h1 className="font-extrabold">titulo</h1>
        <p className="text-xs text-gray-400 text-justify break-words">
          descrição dkjhgfkf hhkfk fksufksf sfksf ksgf sgfskgf ksdfgks{' '}
        </p>
      </div>

      <div className="flex gap-4 items-center mt-2">
        <div className="flex gap-2 bg-gray-800 px-2 rounded-xl">
          <button type="button">+</button>
          <span>1</span>
          <button type="button">-</button>
        </div>
        <button
          type="button"
          className="bg-gradient-to-r from-primary-green-1 from-0% to-primary-green-3 to-100% rounded-2xl px-2"
        >
          <Basket size={24} color="#ffffff" weight="thin" />
        </button>
      </div>
    </div>
  );
};
