import {lazy, Suspense} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Loading} from "./components/ui";

// Ленивые страницы
const LoginPage = lazy(() => import('./pages/auth/LoginPage.tsx'));
const RegisterPage = lazy(() => import('./pages/auth/RegisterPage.tsx'))
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));

export default function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route index element={<Navigate to={'/auth/login'}/>}/>
          <Route element={<LoginPage/>} path={'/auth/login'}/>
          <Route element={<RegisterPage/>} path={'/auth/register'}/>
          <Route element={<Home/>} path={'/home'}/>
          <Route element={<Profile/>} path={'/profile'}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
