import { useState, type FC, useEffect } from 'react';

import Layout from '../Components/Layout';
import SportField from '../Components/SportField';
import { getSportFieldsWithSport } from '../Functions/SportFieldsQuery';
import { type sportData } from '../types/Sport.type';
import { useSelector } from 'react-redux';
import { AppSearch } from '../types/App.type';

const SportFields: FC = () => {
  const searchFilter = useSelector((state: AppSearch) => state.search.search);
  const [data, setData] = useState<sportData[]>([]);

  useEffect(() => {
    if (!searchFilter) return;

    getSportFieldsWithSport(searchFilter)
      .then((data) => data && setData(data))
      .catch((err) => console.log(err));
  }, [searchFilter]);

  return (
    <Layout title="Canchas">
      <div className="flex flex-row w-full justify-center gap-20 overflow-hidden max-h-[90vh]">
        <div
          className={`${
            data.length > 1 ? 'scrollbarSF overflow-y-scroll' : ''
          } flex flex-col gap-5 my-5 w-full max-w-[450px]  lg:mt-10 lg:max-h-[525px] px-5`}
        >
          {data.length ? (
            data.map((item) => (
              <SportField
                key={item.id}
                complexData={true}
                btnText={'RESERVAR'}
                route={`/reservar/${'football'}/canchas/${item.id}`}
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
