import {
  ClipboardText,
  House,
  SignOut,
  ToteSimple,
  UserCircle,
  WhatsappLogo,
  X,
} from '@phosphor-icons/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import { USER_DATA } from '../../hooks/useAuth';

interface IProps {
  className: string;
  onClick: () => void;
}

export const DropDownMenu = ({ className, onClick }: IProps) => {
  const { signOut } = useContext(AuthContext);
  return (
    <div
      className={`relative z-[9999] ${className}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-900  bg-opacity-75 transition-opacity" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-black px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start justify-center">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="mt-2">
                    <div className="flex justify-end  w-full px-6 pr-2 pt-0">
                      <X size={28} weight="light" onClick={onClick} />
                    </div>

                    <div className="px-6">
                      <ul className="flex flex-col items-start justify-center space-y-8 text-white text-2xl font-bold">
                        <li className="cursor-pointer hover:text-primary-red-0 ease-in-out duration-300">
                          <Link className="flex items-center gap-4" to="/">
                            <House /> Home
                          </Link>
                        </li>
                        <li className="cursor-pointer flex items-center gap-2 hover:text-primary-red-0 ease-in-out duration-300">
                          <WhatsappLogo size={24} weight="light" />{' '}
                          <Link
                            to="https://wa.me//5521999999999?text=Gostaria%20de%20acompanhar%20meu%20pedido"
                            target="_blank"
                          >
                            Contato
                          </Link>
                        </li>
                        <li className="cursor-pointer hover:text-primary-red-0 ease-in-out duration-300">
                          <Link
                            className="flex items-center gap-4"
                            to={`/user/${USER_DATA.id}`}
                          >
                            <UserCircle /> Meus Dados
                          </Link>
                        </li>
                        <li className="cursor-pointer hover:text-primary-red-0 ease-in-out duration-300">
                          <Link className="flex items-center gap-4" to="/cart">
                            <ToteSimple /> Sacola
                          </Link>
                        </li>
                        <li className="cursor-pointer hover:text-primary-red-0 ease-in-out duration-300">
                          <Link
                            className="flex items-center gap-4"
                            to="/my-orders"
                          >
                            <ClipboardText /> Meus Pedidos
                          </Link>
                        </li>
                        <li className="cursor-pointer hover:text-primary-red-0 ease-in-out duration-300">
                          <Link
                            className="flex items-center gap-4"
                            to="/login"
                            onClick={signOut}
                          >
                            <SignOut /> Sair
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
