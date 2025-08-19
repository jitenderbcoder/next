'use client';

import { StoreModel } from '@/store/store';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  const { user, isAuthenticated, isNewUser } = useSelector(
    (state: StoreModel) => state.auth
  );

  return {
    user,
    isAuthenticated,
    isNewUser,
    isLoggedIn: isAuthenticated && !!user,
  };
};
