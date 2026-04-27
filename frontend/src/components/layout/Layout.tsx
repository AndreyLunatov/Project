import {Outlet} from "react-router-dom";
import {Header} from "./Header.tsx";
import {LoginPage} from "./LoginPage.tsx";

export const Layout = () => {
  return (
    <div className={'h-full'}>
      {/*<LoginPage/>*/}
      <Header/>
      <Outlet/> {/* Вот здесь будут рендериться нужные страницы */}
    </div>
  );
}
