import { type FC, useState, useEffect } from 'react';

import Layout from '../Components/Layout';
import ReservationCard from '../Components/ReservationCard';
import { GetReservations } from '../Functions/ReservationsQuery';
import PrimaryButton from '../Components/PrimaryButton';

import { useNavigate } from 'react-router-dom';

const ProfileReservation: FC = () => {
  const [reservations, setReservations] = useState<string[]>([]);

  const navigate = useNavigate();
  const handleRoute = () => navigate('/reservar');

  useEffect(() => {
    const token = localStorage.getItem('token') ?? '';
    GetReservations(token)
      // .then((data) => setReservations(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout title="Mis reservas">
      <div className="flex w-full justify-center">
        {' '}
        <div className="bg-white rounded-lg shadow-lg mx-2 mt-20 max-h-[500px] min-h-[500px] flex flex-col gap-2 overflow-y-scroll w-[700px]">
          {reservations.length ? (
            reservations.map((item, index) => <ReservationCard key={index} />)
          ) : (
            <div className="h-full flex justify-center items-center flex-col gap-5">
              <span className="text-xl">No tienes ninguna reservacion aún</span>
              <PrimaryButton text="Ir a reservar" onClick={handleRoute} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProfileReservation;
