import { useState, type FC, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Layout from '../../Components/layout/Layout';
import SportField from '../../Components/cards/SportField';
import { getSportFieldsWithSport } from '../../Functions/SportFieldsQuery';
import { type sportData } from '../../types/Sport.type';

const SportFields: FC = () => {
  const [data, setData] = useState<sportData[]>([]);

  const location = useLocation();

  const { sport } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const lat = queryParams.get('lat');
  const lng = queryParams.get('lng');
  const rHour = queryParams.get('rHour');
  const date = queryParams.get('date');
  const fieldType = queryParams.get('fieldType');

  useEffect(() => {
    if (lat && lng && rHour && date && sport && fieldType) {
      getSportFieldsWithSport({
        lat: Number(lat),
        lng: Number(lng),
        rHour: Number(rHour),
        date,
        sport,
        fieldType,
      })
        .then((data) => data && setData(data))
        .catch((err) => console.log(err));
    }
  }, [lat, lng, rHour, date, sport, fieldType]);

  return (
    <Layout title="Canchas">
      {data.length ? (
        <div className="flex flex-row w-full justify-center gap-20 overflow-hidden max-h-[90vh]">
          <div
            className={`${
              data.length > 1 ? 'scrollbarSF overflow-y-scroll' : ''
            } flex flex-col gap-5 my-5 w-full max-w-[450px]  lg:mt-10 lg:max-h-[525px] px-5`}
          >
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
        </div>
      ) : (
        <span className="h-[50vh] flex justify-center items-center text-2xl">
          No hay coincidencias
        </span>
      )}
    </Layout>
  );
};

export default SportFields;
