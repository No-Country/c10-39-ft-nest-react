import { type FC } from 'react';

import Layout from '../Components/Layout';
import SportField from '../Components/SportField';

const SFOwner: FC = () => {
  const Data = ['1', '1', '1', '1', '1', '1', '1'];

  return (
    <Layout title="Mis canchas">
      {Data.map((item, index) => (
        <SportField
          key={index}
          complexData={false}
          btnText={'ADMINISTRAR'}
          route="/propietarios/canchas/id"
        />
      ))}
    </Layout>
  );
};

export default SFOwner;
