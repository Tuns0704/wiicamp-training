import { ReactNode, useEffect } from 'react';
import { authStoreActions } from '@/stores/auth';
import AuthService from '@/services/auth';

function AuthProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const initializedAuth = async () => {
      const response = await AuthService.getCurrentUser();
      const user = response.data;
      if (user) {
        authStoreActions.setUser(user);
      }
    };

    initializedAuth();
  }, []);

  return children;
}

export default AuthProvider;
