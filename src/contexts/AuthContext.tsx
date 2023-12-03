/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext } from 'react';

export interface IData {
  email: string;
  token: string;
  id: string;
}

interface IAuthContextData {
  signIn: (email: string, password: string) => Promise<IData>;
  signOut: () => void;
  userIsLogged: boolean;
}
export const AuthContext = createContext<IAuthContextData>(null!);
