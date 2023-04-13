import { type FC, useState } from 'react';

import HoursList from './HoursList';

const SFDetailMenu: FC<{ openMenu: boolean }> = ({ openMenu }) => {
  const [openHours, setOpenHours] = useState(false);
  const handleOpenHours = () => setOpenHours(!openHours);

  return (
    <>
      <ul
        className={`${
          openMenu ? 'flex' : 'hidden'
        }   items-center absolute right-12 top-[50px] h-auto w-52 bg-white shadow-lg rounded-md flex-col`}
      >
        <li className="pl-5 py-5 active:bg-primary w-full cursor-pointer">Cambiar cancha</li>
        <li className="pl-5 py-5 active:bg-primary w-full cursor-pointer">Cambiar día</li>
        <li className="pl-5 py-5 active:bg-primary w-full cursor-pointer" onClick={handleOpenHours}>
          Cambiar horario
        </li>
        {openHours && <HoursList handleClick={handleOpenHours} />}
      </ul>
    </>
  );
};

export default SFDetailMenu;
