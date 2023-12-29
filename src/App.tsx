import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { DropDownMenu } from './components/DropdownModal';
import Layout from './components/Layout';
import { Admin } from './pages/Admin';
import { AddProduct } from './pages/Admin/AddProduct';
import { UpdateProduct } from './pages/Admin/UpdateProduct';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { MyOrders } from './pages/MyOrders';
import { PageNotFound } from './pages/NotFound';
import { Product } from './pages/Product';
import { Recover } from './pages/Recover';
import { Register } from './pages/Register';
import { ThankyouPage } from './pages/Thankyou';
import { UserPage } from './pages/UserPage';
import { ProtectedRoute } from './routes/ProtectedRoute';

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleClickDropdownMenu = () => {
    setIsOpenMenu(true);
  };

  const handleCloseDropdownMenu = () => {
    setIsOpenMenu(false);
  };
  return (
    <div className="bg-bg-main-menu bg-no-repeat bg-cover ">
      <ToastContainer position="top-right" />
      <DropDownMenu
        onClick={handleCloseDropdownMenu}
        className={`${
          !isOpenMenu && 'hidden before:content backdrop-blur-md  '
        } ${`md:hidden`} top-[-112]`}
      />
      <Routes>
        <Route element={<Layout onClickMenu={handleClickDropdownMenu} />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recovery" element={<Recover />} />

          <Route
            path="/my-orders"
            element={
              <ProtectedRoute>
                <MyOrders />
              </ProtectedRoute>
            }
          />

          <Route
            path="/user/:id"
            element={
              <ProtectedRoute>
                <UserPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/add-product"
            element={
              <ProtectedRoute>
                <AddProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/update-product/:id"
            element={
              <ProtectedRoute>
                <UpdateProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/thankyou"
            element={
              <ProtectedRoute>
                <ThankyouPage />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
