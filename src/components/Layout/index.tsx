import { SignOut, ToteSimple, WhatsappLogo } from '@phosphor-icons/react';
import { useContext, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import { Button } from '../Button';
import MenuIcon from '../Icons/MenuIcon';
import { Image } from '../Image';
import { Logo } from '../Logo';

interface IPropsDropdownMenu {
  onClickMenu: () => void;
}

const Layout = ({ onClickMenu }: IPropsDropdownMenu) => {
  const { userIsLogged, signOut, userData } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [countItem, setCountItem] = useState(10);

  const handleClickDropDownMenu = () => {
    onClickMenu();
  };

  const cartItem = (
    <li
      className={`cursor-pointer hover:text-primary-red-0 ease-in-out duration-300 relative text-center ${
        countItem > 0 ? 'text-primary-green-0' : ''
      }`}
    >
      <Link to="cart">
        <ToteSimple size={38} weight="light" />
        <span
          className={`absolute top-2 text-base ${
            countItem > 9 ? 'left-[25%]' : 'left-[35%]'
          } `}
        >
          {countItem}
        </span>
      </Link>
    </li>
  );

  return (
    <>
      <header className="z-50 w-full fixed top-0 flex justify-center  ">
        <nav
          className="flex items-center max-w-7xl
                {' '}mx-auto  py-3 px-2 bg-black w-full"
        >
          <div className="flex flex-grow items-center ">
            <div className="flex flex-col relative">
              <Link to="/">
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
              <WhatsappLogo
                size={24}
                weight="light"
                className="text-primary-green-0"
              />{' '}
              <Link to="/promotions">Contato</Link>
            </li>
            {cartItem}
            <li className="cursor-pointer  hover:text-primary-red-0 ease-in-out duration-300">
              <Link to="/admin">Admin</Link>
            </li>
            {userIsLogged ? (
              <li className="flex gap-4 items-center ">
                <p className="cursor-pointer hover:text-primary-red-0 ease-in-out duration-300">
                  Olá, {userData?.name}!
                </p>
                <Image
                  className="rounded-full w-12 border cursor-pointer"
                  src={userData?.image}
                  alt=""
                />
                <SignOut
                  className="cursor-pointer text- hover:brightness-105  hover:text-primary-red-0 ease-in-out duration-300"
                  size={24}
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
          <ul className="md:hidden flex items-center gap-8">
            {cartItem}
            <li>
              <MenuIcon onClick={handleClickDropDownMenu} />{' '}
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
