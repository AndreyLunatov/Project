import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../../pages/Home.tsx";

export const AuthorizedRoutes = () => {
  return (
    <Routes>
      {/* Если авторизован – показываем Home, а попытки открыть логин/регистрацию перенаправляем */}
      <Route path="/" element={<Home/>}/>
      <Route path="/auth/login" element={<Navigate to="/" replace/>}/>
      <Route path="/auth/register" element={<Navigate to="/" replace/>}/>
      {/* На все остальные пути – на главную (или сделай 404) */}
      <Route path="*" element={<Navigate to="/" replace/>}/>
    </Routes>
  );
}
