import {GradeCardGrid, GradeCardList} from "../last_grades_section";
import {GridView, ListView} from "../icons";
import {useState} from "react";

export const LastGradesSection = () => {
  const [view, setView] = useState<'list' | 'grid'>('list')
  return (
    <section className={'bg-card rounded-xl p-4'}>
      <div className={'flex justify-between items-center mb-4'}>
        <h1 className={'text-2xl font-bold'}>Последние оценки</h1>
        <div className={'flex gap-2'}>
          <button
            onClick={() => setView('grid')}
            className={`p-2 rounded ${view === 'grid' ? 'bg-gray-200' : 'bg-transparent'}`}
          >
            <GridView/>
          </button>
          <button
            onClick={() => setView('list')}
            className={`p-2 rounded ${view === 'list' ? 'bg-gray-200' : 'bg-transparent'}`}>
            <ListView/>
          </button>
        </div>
      </div>
      {view === 'list' ? (
          <div className={'flex flex-col gap-3'}>
            <GradeCardList discipline={'Математика'} labor={'Контрольная работа'} date={'24.04.2026'} note={8}/>
            <GradeCardList discipline={'Математика'} labor={'Контрольная работа'} date={'24.04.2026'} note={1}/>
            <GradeCardList discipline={'Математика'} labor={'Контрольная работа'} date={'24.04.2026'} note={3}/>
            <GradeCardList discipline={'Математика'} labor={'Контрольная работа'} date={'24.04.2026'} note={6}/>
            <GradeCardList discipline={'Математика'} labor={'Контрольная работа'} date={'24.04.2026'} note={6}/>
            <GradeCardList discipline={'Математика'} labor={'Контрольная работа'} date={'24.04.2026'} note={6}/>
            <GradeCardList discipline={'Математика'} labor={'Контрольная работа'} date={'24.04.2026'} note={6}/>
            <GradeCardList discipline={'Математика'} labor={'Контрольная работа'} date={'24.04.2026'} note={6}/>
            <GradeCardList discipline={'Математика'} labor={'Контрольная работа'} date={'24.04.2026'} note={6}/>

          </div>
        ) :
        <div className={'grid grid-cols-[repeat(auto-fit,minmax(30px,1fr))]'}>
          <GradeCardGrid note={7}/>
          <GradeCardGrid note={7}/>
          <GradeCardGrid note={7}/>
          <GradeCardGrid note={7}/>
          <GradeCardGrid note={7}/>
          <GradeCardGrid note={7}/>
          <GradeCardGrid note={7}/>

        </div>
      }
    </section>
  );
}
