/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoadingSpinner } from '../components/Spinner';
import { useApi } from '../hooks/useApi';

import { AuthContext, IData } from './AuthContext';

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [userIsLogged, setUserIsLogged] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const api = useApi();

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user-data')) {
      setUserIsLogged(true);
    }
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    const data: IData = await api.signIn(email, password);
    localStorage.setItem('user-data', JSON.stringify(data));
    navigate('/');
    setUserIsLogged(true);
    return data;
  };

  const signOut = () => {
    setUserIsLogged(false);
    localStorage.clear();
    navigate('/login');
  };
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <AuthContext.Provider value={{ signIn, userIsLogged, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
