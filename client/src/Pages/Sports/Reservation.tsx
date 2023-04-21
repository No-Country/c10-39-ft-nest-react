import { useState, useEffect } from 'react';

import SportCard from '../../Components/cards/SportCard';
import Layout from '../../Components/layout/Layout';
import Loader from '../../Components/Loader/Loader';
import { getAllSports } from '../../Functions/SportQuery';

interface SportItem {
  id: string;
  name: string;
  images: string[];
}

const Reservation = () => {
  const [sports, setSports] = useState<SportItem[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);

    getAllSports()
      .then((data) => {
        data && setSports(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout title="Deportes">
      <div className="w-full h-full overflow-scroll bg-cover bg-[45%] py-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 lg:px-10 lg:py-5">
          {loading ? (
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
            <Loader></Loader>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Reservation;
