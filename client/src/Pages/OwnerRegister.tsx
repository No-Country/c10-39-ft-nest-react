import { type FC } from 'react';

import Input from '../Components/Input';
import Layout from '../Components/Layout';
import PrimaryButton from '../Components/PrimaryButton';

const OwnerRegister: FC = () => {
  return (
    <Layout title="Propietario">
      <h2 className="text-center text-3xl mt-[50px]">Registrarse</h2>
      <div className="bg-[#D9D9D9] cursor-pointer mx-1 my-[70px] relative rounded h-[227px] text-center ">
        +
      </div>
      <div className="flex flex-col w-full items-center gap-10">
        <Input type="text" label="Documento" state="" setState={() => {}} />
        <Input type="text" label="Numero de telefono" state="" setState={() => {}} />
      </div>
      <div className="absolute bottom-10 right-10">
        <PrimaryButton text="BUSCAR" />
      </div>
    </Layout>
  );
};

export default OwnerRegister;
