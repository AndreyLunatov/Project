import {Navigate, Route, Routes} from "react-router-dom";
import AuthPage from "../../pages/auth/AuthPage.tsx";
import type {ILogin} from "../../utils";

export const GuestRoutes = ({submitLogin}: ILogin) => {
  return (
    <Routes>
      {/* Неавторизованный пользователь видит стартовую страницу и формы аутентификации */}
      <Route path="/" element={<Navigate to={'/auth'}/>}/>
      <Route path="/auth" element={<AuthPage submitLogin={submitLogin}/>}/>
      {/* Всё остальное отправляем на логин */}
      <Route path="*" element={<Navigate to="/auth" replace/>}/>
    </Routes>
  );
}
