import { type FC, useState, useEffect } from 'react';

import Layout from '../Components/layout/Layout';
import ReservationCard from '../Components/cards/ReservationCard';
import { GetReservations } from '../Functions/ReservationsQuery';
import PrimaryButton from '../Components/PrimaryButton';

import { useNavigate } from 'react-router-dom';
import { GetReservationType } from '../types/Reservation.type';

const ProfileReservation: FC = () => {
  const [reservations, setReservations] = useState<GetReservationType[]>([]);

  const deleteReservations = (deletedId: string) => {
    const newReservations = reservations.filter((item) => item.reservation.id !== deletedId);
    setReservations(newReservations);
    return newReservations.some((item) => item.reservation.id === deletedId);
  };

  const navigate = useNavigate();
  const handleClick = () => navigate('/reservar');

  useEffect(() => {
    GetReservations()
      .then((data) => data && setReservations(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout title="Mis reservas">
      <div className="flex w-full justify-center relative">
        {' '}
        <div className="bg-white rounded-lg shadow-lg mx-2 mt-20 max-h-[500px] min-h-[500px] flex flex-col gap-2 overflow-y-scroll w-[700px]">
          {reservations.length ? (
            reservations.map((item: GetReservationType) => (
              <ReservationCard
                key={item.id}
                reservation={item}
                deleteReservations={deleteReservations}
              />
            ))
          ) : (
            <div className="h-full flex justify-center items-center flex-col gap-5">
              <span className="text-xl">No tienes ninguna reservacion aún</span>
              <PrimaryButton text="Ir a reservar" onClick={handleClick} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProfileReservation;
