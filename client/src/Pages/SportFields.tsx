import { useState, type FC, useEffect } from 'react';

import Layout from '../Components/Layout';
import SportField from '../Components/SportField';
import { getSportFieldsWithSport } from '../Functions/SportFieldsQuery';
import { useParams } from 'react-router-dom';
import { type sportData } from '../types/Sport.type';

const SportFields: FC = () => {
  const [data, setData] = useState<sportData[]>([]);

  const { sport = '' } = useParams();

  useEffect(() => {
    const token = localStorage.getItem('token') ?? '';
    getSportFieldsWithSport(sport, token)
      .then((data) => data && setData(data))
      .catch((err) => console.log(err));
  }, [sport]);

  return (
    <Layout title="Canchas">
      <div className="flex flex-row w-full justify-center gap-20 overflow-hidden max-h-[90vh]">
        <div className="scrollbarSF flex flex-col gap-5 my-5 w-full max-w-[450px] overflow-y-scroll lg:mt-10 lg:max-h-[525px] px-5">
          {data.length ? (
            data.map((item) => (
              <SportField
                key={item.id}
                complexData={true}
                btnText={'RESERVAR'}
                route={`/reservar/${sport}/canchas/${item.id}`}
                title={item.name}
                complex={item.sportComplex}
              />
            ))
          ) : (
            <span>No hay coincidencias</span>
          )}
        </div>
        <div className="hidden rounded-lg lg:block w-[700px] h-[475px] bg-primary mt-20"></div>
      </div>
    </Layout>
  );
};

export default SportFields;
