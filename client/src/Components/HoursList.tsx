import { type FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getSportAvailability } from '../Functions/SportFieldsQuery';

interface hoursType {
  end_hour: string;
  id: string;
  start_hour: string;
}

const HoursList: FC<{ handleClick: () => void }> = ({ handleClick }) => {
  const { id = '' } = useParams();

  const [hours, setHours] = useState<hoursType[]>([
    {
      end_hour: '',
      id: '',
      start_hour: '',
    },
  ]);

  useEffect(() => {
    const token = localStorage.getItem('token') ?? '';
    getSportAvailability(id, token)
      .then((data) => data && setHours(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      {hours.length ? (
        <ul className="bg-white absolute top-0 -left-full py-5 rounded-md shadow-lg">
          <li className="mb-5 divide-black border-b-[1px] mx-5 text-center">
            Horarios disponibles
          </li>
          {hours.map((item) => {
            return (
              <li
                key={item.id}
                className="flex cursor-pointer py-1 px-5 active:bg-primary"
                onClick={handleClick}
              >
                <span className="w-16">{item.start_hour}:00hs</span>
                <span className="w-5">-</span>
                <span className="w-16">{item.end_hour}:00hs</span>
              </li>
            );
          })}
        </ul>
      ) : (
        <span>No hay horarios disponibles</span>
      )}
    </>
  );
};

export default HoursList;
