import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { DropwDownMenu } from './components/DropdownModal';
import Layout from './components/Layout';
import { Admin } from './pages/Admin';
import { AddProduct } from './pages/Admin/AddProduct';
import { UpdateProduct } from './pages/Admin/UpdateProduct';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { PageNotFound } from './pages/NotFound';
import { Product } from './pages/Product';
import { Promotions } from './pages/Promotions';
import { Recover } from './pages/Recover';
import { Register } from './pages/Register';
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
    <div className="relative bg-bg-main-menu bg-no-repeat bg-cover ">
      <DropwDownMenu
        onClick={handleCloseDropdownMenu}
        className={`${!isOpenMenu && 'hidden '}`}
      />
      <Routes>
        <Route element={<Layout onClickMenu={handleClickDropdownMenu} />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recovery" element={<Recover />} />
          <Route path="/promotions" element={<Promotions />} />

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
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
