import { Outlet } from 'react-router-dom';

import { Button } from '../Button';
import { Logo } from '../Logo';

const Layout = () => (
  <>
    <header className="z-50 w-full ">
      <nav className="flex items-center max-w-7xl mx-auto px-6 py-3 bg-layout">
        <div className="flex flex-grow items-center ">
          <div className="flex flex-col relative">
            <Logo />
          </div>
        </div>
        <ul className="flex items-center justify-end space-x-6 text-gray-200">
          <li className="cursor-pointer hover:text-primary-red-0 ease-in-out duration-300">
            Home
          </li>
          <li className="cursor-pointer  hover:text-primary-red-0 ease-in-out duration-300">
            Cardápio
          </li>
          <li className="cursor-pointer  hover:text-primary-red-0 ease-in-out duration-300">
            Sacola
          </li>
          <li className="cursor-pointer  hover:text-primary-red-0 ease-in-out duration-300">
            Login
          </li>
          <li className="cursor-pointer  hover:text-primary-red-0 ease-in-out duration-300">
            <Button
              className="btn  hover:brightness-200
              ease-in-out
              duration-300
              rounded-full
              text-white"
              type="button"
            >
              Cadastre-se
            </Button>
          </li>
        </ul>
      </nav>
    </header>

    <Outlet />
  </>
);

export default Layout;
