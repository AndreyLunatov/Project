import {Outlet} from "react-router-dom";
import {Header} from "./Header.tsx";

export const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/> {/* Вот здесь будут рендериться нужные страницы */}
    </div>
  );
}
