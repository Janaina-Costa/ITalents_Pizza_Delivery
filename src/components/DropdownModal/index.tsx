import {
  ClipboardText,
  CurrencyCircleDollar,
  House,
  SignOut,
  ToteSimple,
  X,
} from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

import { Divider } from '../Divider';

interface IProps {
  className: string;
  onClick: () => void;
}

export const DropwDownMenu = ({ className, onClick }: IProps) => {
  return (
    <div
      className={` bg-black w-full min-h-full absolute z-[999] p-6  ${className}`}
    >
      <div className="flex  w-full px-6 pr-2 pt-14">
        <div className="w-full flex flex-col justify-start items-start ">
          <h1 className="text-2xl">Fulana de Tal</h1>
        </div>
        <X size={28} weight="light" onClick={onClick} />
      </div>
      <Divider />

      <div className="px-6">
        <ul className="flex flex-col items-start justify-start space-y-8 text-white text-2xl font-bold">
          <li className="cursor-pointer hover:text-primary-red-0 ease-in-out duration-300">
            <Link className="flex items-center gap-4" to="/">
              <House /> Home
            </Link>
          </li>
          <li className="cursor-pointer hover:text-primary-red-0 ease-in-out duration-300">
            <Link className="flex items-center gap-4" to="/promotions">
              <CurrencyCircleDollar /> Promotions
            </Link>
          </li>
          <li className="cursor-pointer hover:text-primary-red-0 ease-in-out duration-300">
            <Link className="flex items-center gap-4" to="/cart">
              <ToteSimple /> Sacola
            </Link>
          </li>
          <li className="cursor-pointer hover:text-primary-red-0 ease-in-out duration-300">
            <Link className="flex items-center gap-4" to="/">
              <ClipboardText /> Meus Pedidos
            </Link>
          </li>
          <li className="cursor-pointer hover:text-primary-red-0 ease-in-out duration-300">
            <Link className="flex items-center gap-4" to="/">
              <SignOut /> Sair
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
