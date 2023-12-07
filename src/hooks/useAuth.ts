/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { IData } from '../contexts/AuthContext';
import { api as apiServer } from '../services/api';
import { IUser } from '../types/User';

import { useApi } from './useApi';

const USER_DATA = JSON.parse(localStorage.getItem('user-data') || '{}');

export const useAuth = () => {
  const [userIsLogged, setUserIsLogged] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<IUser | null>(null);

  const api = useApi();

  const navigate = useNavigate();

  const signIn = async (email: string, password: string) => {
    const data: IData = await api.signIn(email, password);
    if (!data) {
      return;
    }
    localStorage.setItem('user-data', JSON.stringify(data));
    apiServer.defaults.headers.Authorization = `Bearer ${data.token}`;
    getUserById(data.id);
    navigate('/');
    setUserIsLogged(true);
    return data;
  };

  const signOut = () => {
    setUserIsLogged(false);
    localStorage.clear();
    navigate('/login');
  };

  const getUserById = async (idUser: string) => {
    const data = await api.getUserById(idUser);
    setUserData(data);
  };

  useEffect(() => {
    if (USER_DATA) {
      apiServer.defaults.headers.Authorization = `Bearer ${USER_DATA.token}`;
      setUserIsLogged(true);
    }
    setLoading(false);
  }, []);

  return { userIsLogged, loading, userData, signIn, signOut };
};
