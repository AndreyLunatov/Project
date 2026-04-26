import {memo} from "react";
import {NavLink} from "react-router-dom";

export const LogoIcon = memo(() => {
  return (
    <div>
      <NavLink
        to={'/'}>
        COCO
      </NavLink>
    </div>
  );
})
