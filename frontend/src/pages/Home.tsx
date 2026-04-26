import {StatisticSection} from "../components/layout/StatisticSection.tsx";
import {UpcomingTasks} from "../components/layout/UpcomingTasksSection.tsx";
import {LastGradesSection} from "../components/layout/LastGradesSection.tsx";

export default function Home() {
  return (
    <div>
      <div className={'container p-4 mx-auto'}>
        <StatisticSection/>
        <UpcomingTasks/>
        <LastGradesSection/>
      </div>
    </div>
  );
}
