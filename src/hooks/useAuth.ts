/* eslint-disable consistent-return */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { IData } from '../contexts/AuthContext';

import { useApi } from './useApi';

export const useAuth = () => {
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
    if (!data) {
      return;
    }
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
  return { userIsLogged, loading, signIn, signOut };
};
