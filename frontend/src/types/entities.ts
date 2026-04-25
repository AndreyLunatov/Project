// Типы основных сущностей приложения
import React from "react";

export interface IMenuItem {
  title: string;
  to: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
