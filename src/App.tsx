import { Route, Routes } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { PageNotFound } from './pages/NotFound';
import { Recover } from './pages/Recover';
import { Register } from './pages/Register';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover" element={<Recover />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
