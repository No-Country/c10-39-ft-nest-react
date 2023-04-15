import { useEffect, type FC, useState } from 'react';

import Layout from '../Components/Layout';
import SportField from '../Components/SportField';
import { getOwnerSportFields } from '../Functions/SportFieldsQuery';
import { type ISportField } from '../types/SportField.type';

const SFOwner: FC = () => {
  const [sportFields, setSportFields] = useState<ISportField[]>([]);

  useEffect(() => {
    getOwnerSportFields()
      .then((data) => data && setSportFields(data))
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <Layout title='Mis canchas'>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-1 py-20 lg:px-10'>
        {sportFields.map((sportField, index) => (
          <SportField
            key={index}
            complexData={false}
            btnText={'EDITAR'}
            route={`/propietarios/canchas/${sportField.id}`}
            title={sportField.name}
          />
        ))}
      </div>
    </Layout>
  );
};

export default SFOwner;
