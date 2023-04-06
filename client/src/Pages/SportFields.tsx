import { type FC } from 'react';

import Layout from '../Components/Layout';
import SportField from '../Components/SportField';

const SportFields: FC = () => {
  const Data = ['1', '1', '1', '1', '1', '1', '1'];

  return (
    <Layout title="Canchas">
      <div className="flex flex-col gap-5 my-5">
        {Data.map((item, index) => (
          <SportField
            key={index}
            complexData={true}
            btnText={'RESERVAR'}
            route="/reservas/:sport/canchas/id"
          />
        ))}
      </div>
    </Layout>
  );
};

export default SportFields;
