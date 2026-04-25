import {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Layout } from "./components/layout";
import { Loading } from "@/components/common/Loading.tsx";
import './styles/theme.css'

// Ленивые страницы
const Home = lazy(() => import('./pages/Home'));
const Schedule = lazy(() => import('./pages/Schedule.tsx'));
const Grades = lazy(() => import('./pages/Grades'));
const Homework = lazy(() => import('./pages/Homework'));
const Profile = lazy(() => import('./pages/Profile'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="schedule" element={<Schedule/>}/>
            <Route path="grades" element={<Grades/>}/>
            <Route path="homework" element={<Homework/>}/>
            <Route path="profile" element={<Profile/>}/>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
