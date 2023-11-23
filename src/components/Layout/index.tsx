import { Outlet } from 'react-router-dom';

import logo from '../../assets/logo.png';

const Layout = () => (
  <>
    <header className="z-50 w-full">
      <nav className="flex items-center max-w-7xl mx-auto px-6 py-3  bg-red-400">
        <div className="flex flex-grow items-center ">
          <img src={logo} alt="logo" className="w-28 cursor-pointer" />
          <p className="text-center text-3xl font-semibold text-gray-700">
            <span className="text-[#00913]">D</span>elizi
            <span className="text-[#c1001c]">a</span>
          </p>
        </div>
        <ul className="flex items-center justify-end space-x-6">
          <li>Home</li>
          <li>Cardápio</li>
          <li>Sacola</li>
          <li>Login</li>
          <li>Cadastre-se</li>
        </ul>
      </nav>
    </header>

    <Outlet />
  </>
);

export default Layout;
