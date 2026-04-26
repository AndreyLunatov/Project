interface Props {
  note: number;
}

export const GradeCardGrid = ({note}: Props) => {
  return (
    <div>
      <h2 className={`
            ${note > 8 && note <= 10 ? 'bg-chart-2' :
        note > 6 && note <= 8 ? 'bg-chart-1' :
          note > 4 && note <= 6 ? 'bg-chart-3' :
            note <= 4 ? 'bg-chart-4' : 'bg-chart-5'}
            w-10 h-10 items-center flex justify-center text-2xl font-semibold rounded-lg`}>{note}</h2>
    </div>
  );
}
