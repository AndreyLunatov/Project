import {Outlet} from 'react-router-dom';
import { Aside } from "./Aside.tsx";
import {Header} from "./Header.tsx";

export const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <Aside/>
      <main className={'w-full'}>
        <Header userName={'Иван Петров'} userClass={'11-A'}/>
        <Outlet/> {/* Здесь будет активная страница */}
      </main>
    </div>
  );
};
