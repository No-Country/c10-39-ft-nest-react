import { useState, useEffect } from 'react';

import Layout from '../Components/Layout';
import SportCard from '../Components/SportCard';
import { getAllSports } from '../Functions/SportQuery';

interface SportItem {
  id: string;
  name: string;
  images: string[];
}

const Reservation = () => {
  const [sports, setSports] = useState<SportItem[] | []>([]);

  useEffect(() => {
    getAllSports(setSports);
  }, []);

  return (
    <Layout title="Deportes">
      <div className="w-full h-full overflow-scroll fixed bg-cover bg-[45%] py-10 lg:py-20">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:pb-5">
          {sports.length ? (
            sports.map((sport) => {
              return (
                <SportCard
                  key={sport.id}
                  href={`/reservar/${sport.name}`}
                  bgImage={sport.images[0]}
                  title={sport.name}
                />
              );
            })
          ) : (
            <h2 className="text-2xl text-center flex w-screen mt-20 justify-center items-center">
              ERROR - DEPORTES EN MANTENIMIENTO
            </h2>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Reservation;
