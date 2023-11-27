import { Outlet } from 'react-router-dom';

import { Button } from '../Button';
import MenuIcon from '../Icons/MenuIcon';
import { Logo } from '../Logo';

const Layout = () => (
  <>
    <header className="z-50 w-full ">
      <nav className="flex items-center max-w-7xl mx-auto  py-3 px-2 bg-transparent">
        <div className="flex flex-grow items-center ">
          <div className="flex flex-col relative">
            <Logo />
          </div>
        </div>
        <ul
          className="flex items-center justify-end space-x-6
          max-md:hidden
        "
        >
          <li className="cursor-pointer hover:text-primary-red-0 ease-in-out duration-300">
            Home
          </li>
          <li className="cursor-pointer  hover:text-primary-red-0 ease-in-out duration-300">
            Promoções
          </li>
          <li className="cursor-pointer  hover:text-primary-red-0 ease-in-out duration-300">
            Sacola
          </li>
          <li className="cursor-pointer  hover:text-primary-red-0 ease-in-out duration-300">
            Login
          </li>
          <li className="cursor-pointer  hover:text-primary-red-0 ease-in-out duration-300">
            <Button className="" type="button" isSelected>
              Cadastre-se
            </Button>
          </li>
        </ul>
        <div className="md:hidden">
          <MenuIcon />{' '}
        </div>
      </nav>
    </header>

    <Outlet />
  </>
);

export default Layout;
