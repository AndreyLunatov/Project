import React from "react";
import HomeIcon from "./icons/HomeIcon.tsx";
import ScheduleIcon from "./icons/ScheduleIcon.tsx";
import GradeIcon from "./icons/GradeIcon.tsx";
import Homework from "./icons/HomeworkIcon.tsx";
import Profile from "./icons/ProfileIcon.tsx";

interface IMenuItem {
  title: string;
  icon: React.NamedExoticComponent<React.SVGProps<SVGSVGElement>>;
}

const fields: IMenuItem[] = [
  { title: "Главная", icon: HomeIcon },
  { title: "Расписание", icon: ScheduleIcon },
  { title: "Оценки", icon: GradeIcon },
  { title: "Домашнее задание", icon: Homework },
  { title: "Профиль", icon: Profile },
];

export default function AsideNavigation() {
  return (
    <ul>
      {fields.map((field) => (
        <li key={field.title}>
          <field.icon className="w-6 h-6" aria-hidden="true"/>
          <p className={'font-medium'}>{field.title}</p>
        </li>
      ))}
    </ul>
  );
}
