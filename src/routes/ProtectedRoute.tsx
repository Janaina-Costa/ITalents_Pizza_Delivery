/* eslint-disable no-undef */
import { ReactElement, ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

interface IProps {
  children: ReactNode | JSX.Element | ReactElement;
}

export const ProtectedRoute = ({ children }: IProps) => {
  const { userIsLogged } = useContext(AuthContext);

  if (!userIsLogged) {
    return <Navigate to="/login" />;
  }

  return children;
};
