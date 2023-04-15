import { type FC } from 'react';
import Calendar from 'react-calendar';

import { dateToString } from '../utils/dateToString';

interface calendarProps {
  handleClick: (option: string) => void;
}

export const MyCalendar: FC<calendarProps> = ({ handleClick }) => {
  const handleDay = (day: Date) => {
    const dayPicked: string = dateToString(day);
    handleClick(dayPicked);
  };
  return (
    <div className="flex items-center w-[325px] flex-col shadow-lg lg:w-auto">
      <Calendar onChange={(day) => handleDay(day as Date)} className="border-0"></Calendar>
    </div>
  );
};

export default MyCalendar;
