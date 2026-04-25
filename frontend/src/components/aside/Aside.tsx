import AsideNavigation from "./AsideNavigation.tsx";
import SettingsIcon from "./icons/SettingsIcon.tsx";

export default function Aside() {
  return (
    <aside className="bg-(--aside-color) flex flex-col text-white py-5 px-7 w-fit">
      <div>
        <h1>Электронный дневник</h1>
      </div>
      <div className="flex flex-col ">
        <div>
          <AsideNavigation/>
        </div>
        <div>
          <SettingsIcon className="w-6 h-6" aria-hidden="true"/>
          <p>Настройки</p>
        </div>
      </div>
    </aside>
  );
}


/**<aside className="bg-(--aside-color) flex flex-col text-white w-60">
 <div className="py-6 border-b-2 border-(--aside-border-color)">
 <h1 className={'pl-6 font-bold text-2xl'}>Электронный дневник</h1>
 </div>
 <div className={'flex flex-col '}>
 <div>
 <ul className="flex flex-col gap-2 p-4">
 {fields.map((field) => (
 <li key={field.title} className="flex gap-3 px-2 py-3 hover:bg-blue-700 rounded-md cursor-pointer">
 <field.icon className="w-6 h-6" aria-hidden="true"/>
 <p className={'font-medium'}>{field.title}</p>
 </li>
 ))}
 </ul>
 </div>
 <div className={'m-4 flex gap-3 px-2 py-3 hover:bg-blue-700 rounded-md cursor-pointer'}>
 <SettingsIcon className="w-6 h-6" aria-hidden="true"/>
 <p>Настройки</p>
 </div>
 </div>
 </aside>
 */
