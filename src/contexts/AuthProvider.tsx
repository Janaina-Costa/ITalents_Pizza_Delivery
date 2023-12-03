/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useApi } from '../hooks/useApi';

import { AuthContext, IData } from './AuthContext';

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [userIsLogged, setUserIsLogged] = useState<boolean>(false);
  const api = useApi();

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user-data')) {
      setUserIsLogged(true);
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    const data: IData = await api.signIn(email, password);
    localStorage.setItem('user-data', JSON.stringify(data));
    navigate('/');
    setUserIsLogged(true);
    return data;
  };

  return (
    <AuthContext.Provider value={{ signIn, userIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
