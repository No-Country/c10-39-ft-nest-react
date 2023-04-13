import { type FC, useState } from 'react';
import Calendar from 'react-calendar';

import HoursList from './HoursList';
import PrimaryButton from './PrimaryButton';
import { dateToString } from '../utils/dateToString';

const SFDetailMenu: FC<{ openMenu: boolean }> = ({ openMenu }) => {
  const [openHours, setOpenHours] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [value, setValue] = useState('');
  const handleOpenHours = () => setOpenHours(!openHours);
  const handleOpenCalendar = () => setOpenCalendar(!openCalendar);
  const handleDay = (day: Date) => {
    const dayPicked: string = dateToString(day);
    setValue(dayPicked);
    console.log(dayPicked);
  };
  return (
    <>
      <ul
        className={`${
          openMenu ? 'flex' : 'hidden'
        }   items-center absolute right-12 top-[50px] h-auto w-52 bg-white shadow-2xl rounded-md flex-col`}
      >
        <li className="pl-5 py-5 hover:bg-primary w-full cursor-pointer">Cambiar cancha</li>

        <li
          onClick={handleOpenCalendar}
          className="pl-5 py-5 hover:bg-primary w-full cursor-pointer"
        >
          Cambiar día
        </li>
        <div
          className={`${
            openCalendar ? 'flex' : 'hidden'
          }   items-center absolute -right-12 lg:-right-[350px] top-[50px]  flex-col shadow-2xl `}
        >
          <div onClick={handleOpenCalendar} className="flex w-full pr-1 justify-end cursor-pointer">
            x
          </div>
          <Calendar
            onChange={(day) => handleDay(day as Date)}
            value={value}
            className="border-0"
          ></Calendar>
          <div
            onClick={handleOpenCalendar}
            className="flex w-full p-2 bg-white justify-end cursor-pointer"
          >
            <PrimaryButton text="CONFIRMAR"></PrimaryButton>
          </div>
        </div>
        <li className="pl-5 py-5 hover:bg-primary w-full cursor-pointer" onClick={handleOpenHours}>
          Cambiar horario
        </li>
        {openHours && <HoursList handleClick={handleOpenHours} />}
      </ul>
    </>
  );
};

export default SFDetailMenu;
