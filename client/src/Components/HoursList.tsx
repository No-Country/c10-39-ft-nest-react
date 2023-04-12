import { type FC, useEffect, useState } from 'react';
import { getSportAvailability } from '../Functions/SportFieldsQuery';
import { useParams } from 'react-router-dom';

interface hoursType {
  end_hour: string;
  id: string;
  start_hour: string;
}

const HoursList: FC = () => {
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
    <ul className="absolute">
      <li>Hola</li>
    </ul>
  );
};

export default HoursList;
