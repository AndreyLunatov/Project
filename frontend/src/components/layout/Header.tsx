import React from "react";
import {Notifications} from "../header/Notifications.tsx";
interface Props {
  userName: string;
  userClass: string;
}

const HeaderComponent = ({userName, userClass}:Props) => {
  const name = userName.split(' ');
  return (
    <header className={'flex w-full bg-card px-8 py-4 border-b border-border justify-between items-center h-fit'}>
      <div>
        <h1>Добро пожаловать {name[0]}!</h1>
        <h2>год-год учебный год</h2>
      </div>
      <div className={'flex gap-6'}>
        <div className={'flex items-center'}>
          <Notifications className={'w-6 h-6 cursor-pointer'}/>
        </div>
        <div className={'flex gap-2 text-center items-center cursor-pointer rounded-xl hover:bg-blue-700/40 p-2'}>
          <canvas width={45} height={45} className={'bg-amber-100 rounded-full'}/>
          <div className={'flex flex-col text-xs gap-1'}>
            <h3>{userName}</h3>
            <h3>{userClass} класс</h3>
          </div>
          <p>'</p>
        </div>
      </div>
    </header>
  );
}

export const Header = React.memo(HeaderComponent);
