import { Route, Routes } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" />
      </Route>
    </Routes>
  );
}

export default App;
