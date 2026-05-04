import {Navigate, Route, Routes} from "react-router-dom";
import {AuthPage} from "../../pages/AuthPage.tsx";
import type {IUseAuthFormParams} from "../../utils";

export const GuestRoutes = ({submitLogin, submitRegistration}: IUseAuthFormParams) => {
  return (
    <Routes>
      {/* Неавторизованный пользователь видит стартовую страницу и формы аутентификации */}
      <Route path="/" element={<Navigate to={'/auth'}/>}/>
      <Route
        path="/auth"
        element={
        <AuthPage submitLogin={submitLogin}
                  submitRegistration={submitRegistration}/>
      }
      />
      {/* Всё остальное отправляем на логин */}
      <Route path="*" element={<Navigate to="/auth" replace/>}/>
    </Routes>
  );
}
