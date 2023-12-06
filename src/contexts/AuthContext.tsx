/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext } from 'react';

import { IUser } from '../types/User';

export interface IData {
  email: string;
  token: string;
  id: string;
}

interface IAuthContextData {
  signIn: (email: string, password: string) => Promise<IData | undefined>;
  signOut: () => void;
  userIsLogged: boolean;
  userData: IUser | null;
}
export const AuthContext = createContext<IAuthContextData>(null!);
