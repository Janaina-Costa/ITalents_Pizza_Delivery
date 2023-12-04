import { SignOut, ToteSimple, WhatsappLogo } from '@phosphor-icons/react';
import { useContext, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import { Button } from '../Button';
import MenuIcon from '../Icons/MenuIcon';
import { Logo } from '../Logo';

const Layout = () => {
  const { userIsLogged, signOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [countItem, setCountItem] = useState(10);

  return (
    <>
      <header className="z-50 w-full ">
        <nav className="flex items-center max-w-7xl mx-auto  py-3 px-2 bg-transparent">
          <div className="flex flex-grow items-center ">
            <div className="flex flex-col relative">
              <Link to="/">
                {' '}
                <Logo />
              </Link>
            </div>
          </div>
          <ul
            className="flex items-center justify-end space-x-8
          max-md:hidden relative text-lg
        "
          >
            {location.pathname === '/' ? (
              ''
            ) : (
              <li className="cursor-pointer hover:text-primary-red-0 ease-in-out duration-300">
                <Link to="/">Home</Link>
              </li>
            )}
            <li className="cursor-pointer  hover:text-primary-red-0 ease-in-out duration-300">
              <Link to="/promotions">Promoções</Link>
            </li>
            <li className="cursor-pointer flex items-center gap-2 hover:text-primary-red-0 ease-in-out duration-300">
              <Link to="/promotions">Contato</Link>
              <WhatsappLogo
                size={24}
                weight="light"
                className="text-primary-green-0"
              />{' '}
            </li>
            <li
              className={`cursor-pointer hover:text-primary-red-0 ease-in-out duration-300 relative text-center ${
                countItem > 0 ? 'text-primary-green-2' : ''
              }`}
            >
              <Link to="bag">
                <ToteSimple size={38} weight="light" />
              </Link>
              <span
                className={`absolute top-2 text-base ${
                  countItem > 9 ? 'left-[25%]' : 'left-[35%]'
                } `}
              >
                {countItem}
              </span>
            </li>
            {userIsLogged ? (
              <li className="flex gap-4 cursor-pointer hover:text-primary-red-0 ease-in-out duration-300">
                <p>Olá, Fulana!</p>
                <SignOut
                  className="cursor-pointer text- hover:brightness-105"
                  size={24}
                  color="#ffffff"
                  weight="bold"
                  onClick={signOut}
                />
              </li>
            ) : (
              <>
                <li className="cursor-pointer  hover:text-primary-red-0 ease-in-out duration-300">
                  <Link to="/login">Login</Link>
                </li>
                <li className="cursor-pointer  hover:text-primary-red-0 ease-in-out duration-300">
                  <Button
                    className=""
                    type="button"
                    isSelected
                    onClick={() => navigate('/register')}
                  >
                    Cadastre-se
                  </Button>
                </li>
              </>
            )}
          </ul>
          <div className="md:hidden">
            <MenuIcon />{' '}
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
