import { type FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllSportNames } from '../Functions/SportQuery';
import { type AppSportNames } from '../types/App.type';

interface sportProps {
  handleClick: () => void;
  state: boolean;
}

const SportMenu: FC<sportProps> = ({ handleClick, state }) => {
  const sportNames = useSelector((state: AppSportNames) => state.sportNames.sportNames);

  useEffect(() => {
    const token = localStorage.getItem('token') ?? '';
    getAllSportNames(token)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ul
      className={`${
        state ? 'flex' : 'hidden'
      } text-white text-2xl lg:text-lg flex-col justify-around absolute -left-56 lg:-left-44 top-10 lg:top-0 w-52 lg:w-40 bg-black py-10 lg:py-5 rounded-md`}
    >
      {sportNames?.length ? (
        sportNames.map((item) => {
          return (
            <li key={item} className="pl-5 py-5 active:bg-primary">
              <Link onClick={handleClick} to={`/reservar/${item}`}>
                {item}
              </Link>
            </li>
          );
        })
      ) : (
        <span>No hay deportes</span>
      )}
    </ul>
  );
};

export default SportMenu;
