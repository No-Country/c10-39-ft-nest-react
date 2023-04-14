import { type FC, useState } from 'react';
import Calendar from 'react-calendar';

import { dateToString } from '../utils/dateToString';

export const MyCalendar: FC<{ handleClick: () => void }> = ({ handleClick }) => {
  const [value, setValue] = useState('');

  const handleDay = (day: Date) => {
    const dayPicked: string = dateToString(day);
    setValue(dayPicked);
    handleClick();
  };
  return (
    <div className="flex items-center w-[325px] flex-col absolute top-16 lg:top-0 -right-5 shadow-lg lg:w-auto lg:-right-[425px]">
      <Calendar
        onChange={(day) => handleDay(day as Date)}
        value={value}
        className="border-0"
      ></Calendar>
    </div>
  );
};

export default MyCalendar;
