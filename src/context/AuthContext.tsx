/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext } from 'react';

interface IAuthContextData {
  signIn: (email: string, password: string) => Promise<boolean>;
  userIsLogged: boolean;
}
export const AuthContext = createContext<IAuthContextData>(null!);
