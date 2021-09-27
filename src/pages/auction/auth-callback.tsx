import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

const AuthCallback: React.FC = () => {
  const router = useRouter();
  const { logout } = useAuth0();
  const [isError, setIsError] = useState<boolean>(false);

  const handleAuth = useCallback(async () => {
    // Call api to register to own database
    if (response.data.success) {
      // redirect to authenticated page
      router.push('/').catch((e) => {});
    }
  }, [router]);

  useEffect(() => {
    if (isError) {
      localStorage.removeItem('authAccessToken');
      logout();
      return;
    }

    handleAuth().catch((e) => {
      setIsError(true);
    });
  }, [handleAuth, isError, logout, router]);
  return <></>;
};

export default AuthCallback;
