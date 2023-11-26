import { Outlet } from 'react-router-dom';

import { Button } from '../Button';
import { Logo } from '../Logo';

const Layout = () => (
  <>
    <header className="z-50 w-full ">
      <nav className="flex items-center max-w-7xl mx-auto px-6 py-3 bg-gradient-to-b from-[#505050] from-0% via-[rgba(31,30,30,1)] via[49%] to-black to-100%">
        <div className="flex flex-grow items-center ">
          <div className="flex flex-col relative">
            <Logo />
          </div>
        </div>
        <ul className="flex items-center justify-end space-x-6 ">
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
            <Button className="" type="button" isSelected>
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
