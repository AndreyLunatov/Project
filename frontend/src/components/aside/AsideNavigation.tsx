import {GradeIcon, HomeIcon, HomeworkIcon, ProfileIcon, ScheduleIcon} from "@/components/aside/icons";
import type {IMenuItem} from "@/types";
import {NavLink} from "react-router-dom";

const menuItems: IMenuItem[] = [
  {title: "Главная", to: '/', icon: HomeIcon},
  {title: "Расписание", to: '/schedule', icon: ScheduleIcon},
  {title: "Оценки", to: '/grades', icon: GradeIcon},
  {title: "Домашнее задания", to: '/homework', icon: HomeworkIcon},
  {title: "Профиль", to: '/profile', icon: ProfileIcon},
];

export const AsideNavigation = () => {
  return (
    <nav>
      <ul className={'mt-4 px-4 flex flex-col gap-2'}>
        {menuItems.map(({title, to, icon: Icon}) => {
          return (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={'navLink'}
              >
                <Icon className={'w-5 h-5'}/>
                <span className={'font-medium text-base'}>{title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
