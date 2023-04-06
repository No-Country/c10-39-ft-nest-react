import { type FC } from 'react';

import Layout from '../Components/Layout';
import SportField from '../Components/SportField';

const SportFields: FC = () => {
  const Data = ['1', '1', '1', '1', '1', '1', '1'];

  return (
    <Layout title="Canchas">
      <div className="flex flex-row w-full justify-center gap-20 overflow-hidden max-h-[90vh]">
        <div className="flex flex-col gap-5 my-5 w-full max-w-[400px] overflow-y-scroll lg:mt-10 lg:overflow-scroll lg:max-h-[525px]">
          {Data.map((item, index) => (
            <SportField
              key={index}
              complexData={true}
              btnText={'RESERVAR'}
              route="/reservas/:sport/canchas/id"
            />
          ))}
        </div>
        <div className="hidden lg:block w-[700px] h-[475px] bg-primary mt-20"></div>
      </div>
    </Layout>
  );
};

export default SportFields;
