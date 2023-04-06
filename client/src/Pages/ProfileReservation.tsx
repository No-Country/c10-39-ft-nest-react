import { type FC } from 'react';

import Layout from '../Components/Layout';
import ReservationCard from '../Components/ReservationCard';

const ProfileReservation: FC = () => {
  const Data = ['1', '1', '1', '1', '1', '1', '1'];

  return (
    <Layout title="Mis reservas">
      <div className="bg-white shadow-lg mx-2 mt-20 max-h-[500px] min-h-[500px] flex flex-col gap-2 overflow-y-scroll">
        {Data.map((item, index) => (
          <ReservationCard key={index} />
        ))}
      </div>
    </Layout>
  );
};

export default ProfileReservation;
