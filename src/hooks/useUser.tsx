import React, { createContext, useCallback, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Auth0User } from '../types';

export const UserContext = createContext({});

export const UserDataProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState(false);
  const { user, isAuthenticated, logout, getAccessTokenSilently, isLoading } =
    useAuth0<Auth0User>();

  const handleLogOut = useCallback(() => {
    localStorage.removeItem('authAccessToken');
    logout();
  }, [logout]);

  const getAccessToken = useCallback(async () => {
    try {
      const accessToken = await getAccessTokenSilently({ ignoreCache: false });
      localStorage.setItem('authAccessToken', accessToken);
    } catch (error) {
      handleLogOut();
    }
  }, [getAccessTokenSilently, handleLogOut]);

  useEffect(() => {
    if (isAuthenticated) {
      getAccessToken().catch((e) => {});
    }
  }, [getAccessToken, isAuthenticated]);

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
