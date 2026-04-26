import {NavLink} from "react-router-dom";
import {LogoIcon} from "../icons";

export const Header = () => {
  return (
    <header
      className={'flex justify-between border-b border-border items-center py-2 pb-4 px-4 sticky top-0 z-1 bg-background'}>
      <LogoIcon/>
      <nav>
        <ul className={'flex gap-2'}>
          <li>
            <NavLink
              to={'/'}>
              <canvas width={25} height={25} className={'bg-amber-200 rounded-full'}/>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/'}>
              <canvas width={25} height={25} className={'bg-amber-200 rounded-full'}/>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/'}>
              <canvas width={25} height={25} className={'bg-amber-200 rounded-full'}/>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/profile'}>
              <canvas width={25} height={25} className={'bg-amber-200 rounded-full'}/>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
