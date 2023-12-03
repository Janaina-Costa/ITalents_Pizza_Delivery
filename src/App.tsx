import { Route, Routes } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout';
import { Bag } from './pages/Bag';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { PageNotFound } from './pages/NotFound';
import { Product } from './pages/Product';
import { Promotions } from './pages/Promotions';
import { Recover } from './pages/Recover';
import { Register } from './pages/Register';
import { ProtectedRoute } from './routes/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recovery" element={<Recover />} />
        <Route path="/promotions" element={<Promotions />} />

        <Route
          path="/bag"
          element={
            <ProtectedRoute>
              <Bag />
            </ProtectedRoute>
          }
        />
        <Route path="/product/:id" element={<Product />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
