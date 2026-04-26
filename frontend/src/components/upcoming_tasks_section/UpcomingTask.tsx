interface Props {
  discipline: string;
  task: string;
  deadline: string;
}

export const UpcomingTask = ({discipline, task, deadline}: Props) => {
  return (
    <div className={'bg-muted rounded-2xl p-4 border-l-4 border-accent flex justify-between'}>
      <div>
        <h3 className={'text-xm'}>{discipline}</h3>
        <h4 className={'text-xs text-muted-foreground'}>{task}</h4>
      </div>

      <div className={'text-sm text-destructive'}>
        до {deadline}
      </div>
    </div>
  );
}
