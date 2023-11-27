import { Route, Routes } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
