import { type FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getSportAvailability } from '../Functions/SportFieldsQuery';

interface hoursType {
  end_hour: string;
  id: string;
  start_hour: string;
}

const HoursList: FC<{ handleClick: () => void; getAllHours: boolean }> = ({
  handleClick,
  getAllHours,
}) => {
  const { id = '' } = useParams();

  const [hours, setHours] = useState<hoursType[]>([
    {
      end_hour: '',
      id: '',
      start_hour: '',
    },
  ]);

  const allHours: hoursType[] = [];
  for (let i = 7; i <= 24; i++) {
    const end_hour = i === 24 ? 0 : i + 1;
    const addedHour = {
      end_hour: end_hour.toString(),
      id: i.toString(),
      start_hour: i.toString(),
    };
    allHours.push(addedHour);
  }

  useEffect(() => {
    if (getAllHours) {
      setHours(allHours);
    } else {
      getSportAvailability(id)
        .then((data) => data && setHours(data))
        .catch((err) => console.log(err));
    }
  }, [id, getAllHours]);

  return (
    <>
      {hours.length ? (
        <div className="bg-white absolute top-32 -left-24 lg:top-0 lg:-left-full py-5 rounded-md px-1 shadow-lg">
          <span className="mb-2 divide-black border-b-[1px] mx-2 px-1 text-center block w-[90%]">
            {getAllHours ? 'Horarios' : 'Horarios disponibles'}
          </span>
          <ul className="hoursScrollbar overflow-y-scroll max-h-[160px] relative left-1">
            {hours.map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex cursor-pointer py-1 pl-5 pr-3 active:bg-primary"
                  onClick={handleClick}
                >
                  <span className={`w-16 ${item.start_hour.length > 1 ? 'relative right-2' : ''}`}>
                    {item.start_hour}:00hs
                  </span>
                  <span className="w-5 relative right-1">-</span>
                  <span className={`w-16 ${item.end_hour.length > 1 ? 'relative right-2' : ''}`}>
                    {item.end_hour}:00hs
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <span>No hay horarios disponibles</span>
      )}
    </>
  );
};

export default HoursList;
