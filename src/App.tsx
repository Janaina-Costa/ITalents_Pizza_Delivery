import { Route, Routes } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Recover } from './pages/Recover';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/recover" element={<Recover />} />
      </Route>
    </Routes>
  );
}

export default App;
