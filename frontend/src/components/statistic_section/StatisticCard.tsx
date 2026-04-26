import {ArrowIcon} from "../icons/tasks";
import React from "react";

interface Props {
  frameAttributes: string;
  icon: React.ComponentType;
  value: number;
  description: string;
}

export const StatisticCard = ({frameAttributes, icon, value, description}: Props) => {
  const IconComponent = icon;
  return (
    <div className={`bg-linear-to-t ${frameAttributes}} rounded-3xl p-4 text-xs flex flex-col gap-2`}>

      <div className={'flex justify-between items-center'}>
        <IconComponent/>
        <ArrowIcon/>
      </div>

      <h1 className={'text-xl font-semibold'}>{value}</h1>

      <p>{description}</p>

    </div>
  );
}
