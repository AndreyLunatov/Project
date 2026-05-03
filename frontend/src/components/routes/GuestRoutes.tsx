import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "../../pages/auth/LoginPage.tsx";
import RegisterPage from "../../pages/auth/RegisterPage.tsx";
import type {ILogin} from "../../utils";

export const GuestRoutes = ({submitForm}: ILogin) => {
  return (
    <Routes>
      {/* Неавторизованный пользователь видит стартовую страницу и формы аутентификации */}
      <Route path="/" element={<Navigate to={'/auth/login'}/>}/>
      <Route path="/auth/login" element={<LoginPage submitForm={submitForm}/>}/>
      <Route path="/auth/register" element={<RegisterPage/>}/>
      {/* Всё остальное отправляем на логин */}
      <Route path="*" element={<Navigate to="/auth/login" replace/>}/>
    </Routes>
  );
}
