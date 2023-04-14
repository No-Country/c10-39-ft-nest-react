import { useState, type FC, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Layout from '../Components/Layout';
import SportField from '../Components/SportField';
import { getSportFieldsWithSport } from '../Functions/SportFieldsQuery';
import { type sportData } from '../types/Sport.type';

const SportFields: FC = () => {
  const [data, setData] = useState<sportData[]>([]);

  const location = useLocation();

  const { sport } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const lat = queryParams.get('lat');
  const lng = queryParams.get('lng');
  const rHour = queryParams.get('rHour');
  const date = queryParams.get('date');

  useEffect(() => {
    if (lat && lng && rHour && date && sport) {
      getSportFieldsWithSport({
        lat: Number(lat),
        lng: Number(lng),
        rHour: Number(rHour),
        date,
        sport,
      })
        .then((data) => data && setData(data))
        .catch((err) => console.log(err));
    }
  }, [lat, lng, rHour, date, sport]);

  return (
    <Layout title="Canchas">
      {data.length ? (
        <>
          <div className="flex flex-row w-full justify-center gap-20 overflow-hidden max-h-[90vh]">
            {data.map((item) => (
              <SportField
                key={item.id}
                complexData={true}
                btnText={'RESERVAR'}
                route={`/reservar/${'football'}/canchas/${item.id}`}
                title={item.name}
                complex={item.sportComplex}
              />
            ))}
          </div>
          <div className="hidden rounded-lg lg:block w-[700px] h-[475px] bg-primary mt-20"></div>
        </>
      ) : (
        <span className="text-2xl flex h-[50vh] justify-center items-center">
          No hay coincidencias
        </span>
      )}
    </Layout>
  );
};

export default SportFields;
