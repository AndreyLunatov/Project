interface Props {
  discipline: string;
  labor: string;
  date: string;
  note: number;
}

export const GradeCardList = ({discipline, labor, date, note}: Props) => {
  return (
    <div className={'bg-muted rounded-2xl p-4 flex justify-between items-center'}>

      <div>
        <h3 className={'text-xm'}>{discipline}</h3>
        <h4 className={'text-xs text-muted-foreground'}>{labor}</h4>
      </div>

      <div>

        <div className={'flex gap-2'}>
          <h4 className={'flex justify-center items-center text-muted-foreground text-xs'}>{date}</h4>
          <div>
            <h2 className={`
            ${note > 8 && note <= 10 ? 'bg-chart-2' :
              note > 6 && note <= 8 ? 'bg-chart-1' :
                note > 4 && note <= 6 ? 'bg-chart-3' :
                  note <= 4 ? 'bg-chart-4' : 'bg-chart-5'}
            w-10 h-10 items-center flex justify-center text-2xl font-semibold rounded-lg`}>{note}</h2>
          </div>
        </div>

      </div>

    </div>
  )
}
