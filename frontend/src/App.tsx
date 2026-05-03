import {Suspense, useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Loading} from './components/ui';
import {loginApi, verifyToken} from "./api/authApi.ts";
import type {TAuthStatus} from "./utils";
import {AuthorizedRoutes, GuestRoutes} from "./components/routes";

export default function App() {
  // Состояние аутентификации пользователя, по трем пользовательским типам 'loading' | 'authenticated' | 'unauthenticated'
  const [authStatus, setAuthStatus] = useState<TAuthStatus>(() => {
    return localStorage.getItem('session') ? 'loading' : 'unauthenticated';
  });

  // useEffect, для прорисовки в случае изменения состояния
  useEffect(() => {
    const token = localStorage.getItem('session');
    if (!token) {
      return;
    }

    verifyToken(token)
      .then(() => setAuthStatus('authenticated'))
      .catch(() => {
        localStorage.removeItem('session'); // токен невалиден – чистим
        setAuthStatus('unauthenticated');
      });
  }, []);

  const handleLoginSuccess = (token: string) => {
    localStorage.setItem('session', token);
    setAuthStatus('authenticated');
  };

  if (authStatus === 'loading') {
    return <Loading/>;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        {authStatus === 'authenticated' ? (
          <AuthorizedRoutes/>
        ) : (
          <GuestRoutes submitLogin={
            async (login, password) => {
              // вызываем loginApi, получаем token
              const res = await loginApi({login, password});
              if (res.token) {
                handleLoginSuccess(res.token);
                return true;
              }
              return false
            }
          }
          />
        )}
      </Suspense>
    </BrowserRouter>
  );
}



