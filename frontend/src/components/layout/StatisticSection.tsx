import {StatisticCard} from "../statistic_section";
import {TaskIcon} from "../icons/tasks";

export const  StatisticSection = () => {
  const statistics = [
    {
      frame: "from-chart-5 to-chart-4",
      icon: TaskIcon,
      value: 4,
      description: "Описание какой-либо карточки"
    },
    {
      frame: "from-chart-1 to-chart-2",
      icon: TaskIcon,
      value: 5,
      description: "Описание второй карточки"
    },
    {
      frame: "from-chart-2 to-chart-4",
      icon: TaskIcon,
      value: 1,
      description: "Описание второй карточки"
    },
    {
      frame: "from-chart-3 to-chart-5",
      icon: TaskIcon,
      value: 2,
      description: "Описание второй карточки"
    }
  ]
  return (
    <section className={'grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-3 mb-4'}>
      {statistics.map((stat, index) => {
        return <StatisticCard
          key={index}
          icon={stat.icon}
          value={stat.value}
          description={stat.description}
          frameAttributes={stat.frame}/>
      })}
    </section>
  );
}
