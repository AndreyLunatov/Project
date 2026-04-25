import {AsideNavigation, Settings, Logo} from "../aside";
import React from "react";

const AsideComponent = () => {
  return (
    <aside className="w-64 min-h-screen bg-sidebar text-sidebar-foreground flex flex-col">
      <Logo/>
      <AsideNavigation/>
      <Settings/>
    </aside>
  );
};

export const Aside = React.memo(AsideComponent);
