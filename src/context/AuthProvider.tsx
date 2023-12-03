/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-undef */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useApi } from '../hooks/useApi';

import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [userIsLogged, setUserIsLogged] = useState<boolean>(false);
  const api = useApi();

  const navigate = useNavigate();

  const signIn = async (email: string, password: string) => {
    const data = await api.signIn(email, password);
    setUserIsLogged(true);
    navigate('/');
    return data;
  };

  return (
    <AuthContext.Provider value={{ signIn, userIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
