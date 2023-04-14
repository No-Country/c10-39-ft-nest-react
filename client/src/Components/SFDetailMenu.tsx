import { type FC, useState } from 'react';

import HoursList from './HoursList';
import MyCalendar from './MyCalendar';

const SFDetailMenu: FC<{ openMenu: boolean }> = ({ openMenu }) => {
  const [openHours, setOpenHours] = useState(false);
  const [selectedHour, setSelectedHour] = useState('');

  const [openCalendar, setOpenCalendar] = useState(false);

  const handleOpenHours = () => setOpenHours(!openHours);
  const handleSelect = (option: string) => setSelectedHour(option);

  const handleOpenCalendar = () => setOpenCalendar(!openCalendar);

  return (
    <>
      <ul
        className={`${
          openMenu ? 'flex' : 'hidden'
        }   items-center absolute right-12 top-[50px] h-auto w-52 bg-white shadow-2xl rounded-md flex-col`}
      >
        <li
          onClick={handleOpenCalendar}
          className="pl-5 py-5 hover:bg-primary w-full cursor-pointer"
        >
          Cambiar día
        </li>
        <li className="pl-5 py-5 hover:bg-primary w-full cursor-pointer" onClick={handleOpenHours}>
          Cambiar horario
        </li>
        {openCalendar && <MyCalendar handleClick={handleOpenCalendar} />}
        {openHours && (
          <div className="absolute top-32 -left-24 lg:top-0 lg:-left-full">
            <HoursList
              handleClick={handleOpenHours}
              getAllHours={false}
              handleSelect={handleSelect}
            />
          </div>
        )}
      </ul>
    </>
  );
};

export default SFDetailMenu;
