import React from 'react';
import { DailyPage } from '../pages/DailyPage';
import { MonthlyPage } from '../pages/MonthlyPage';
import { WeeklyPage } from '../pages/WeeklyPage';
import { Routes,Route } from 'react-router-dom';

export function CardRoutes() {
  return (
    <div className={` text-white lg:flex lg:flex-wrap lg:gap-x-[30px] lg:ml-[30px] lg:w-[760px]`}>
      <Routes>
        <Route path="/" element={<DailyPage/>} />
        <Route path="/monthly" element={<MonthlyPage/>} />
        <Route path="/weekly" element={<WeeklyPage/>} />
      </Routes>
    </div>
  )
}
