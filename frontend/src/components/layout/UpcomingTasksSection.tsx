import {UpcomingTask} from '../upcoming_tasks_section';

export const UpcomingTasks = () => {
  return (
    <section className={'flex flex-col gap-2 bg-card p-4 rounded-xl mb-4'}>
      <h2 className={'text-2xl font-bold mb-4'}>Предстоящие задачи</h2>
      <div className={'flex flex-col gap-3'}>
        <UpcomingTask discipline={'Математика'} task={'Решить задачи № 12-15'} deadline={'26.04.2026'}/>
        <UpcomingTask discipline={'Математика'} task={'Решить задачи № 12-15'} deadline={'26.04.2026'}/>
        <UpcomingTask discipline={'Математика'} task={'Решить задачи № 12-15'} deadline={'26.04.2026'}/>
      </div>
    </section>
  );
}
