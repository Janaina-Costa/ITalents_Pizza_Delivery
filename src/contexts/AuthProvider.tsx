/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-constructed-context-values */
import { LoadingSpinner } from '../components/Spinner';
import { useAuth } from '../hooks/useAuth';

import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const { loading, signIn, signOut, userIsLogged } = useAuth();
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
