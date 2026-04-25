import {SettingsIcon} from "@/components/aside/icons";

export function Settings() {
  return (
    <div className={'border-t border-sidebar-border p-4 mt-auto'}>
      <div className={'navLink'}>
        <SettingsIcon className={'w-5 h-5'}/>
        <span className={'font-medium text-base'}>Настройки</span>
      </div>
    </div>
  );
}
