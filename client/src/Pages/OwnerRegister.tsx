import { type FC } from 'react';

import Input from '../Components/Input';
import Layout from '../Components/Layout';
import PrimaryButton from '../Components/PrimaryButton';
import { HiOutlineIdentification } from 'react-icons/hi';
import { AiOutlinePhone } from 'react-icons/ai';

const OwnerRegister: FC = () => {
  return (
    <Layout title="Registro de propietario">
      <div className="relative min-h-[100vh] flex flex-col items-center">
        <div className="bg-[#D9D9D9] rounded-lg w-10/12 cursor-pointer my-[70px] relative h-[225px] lg:h-[400px] lg:w-[800px] text-center ">
          +
        </div>
        <div className="flex flex-col w-full items-center gap-10 lg:w-[700px]">
          <Input
            type="text"
            label="Documento"
            state=""
            icon={<HiOutlineIdentification />}
            setState={() => {}}
          />
          <Input
            type="text"
            label="Numero de telefono"
            state=""
            icon={<AiOutlinePhone />}
            setState={() => {}}
          />
        </div>
        <div className="absolute bottom-0 right-10 lg:relative lg:my-10 lg:w-[675px] lg:flex lg:justify-end">
          <PrimaryButton text="AGREGAR" />
        </div>
      </div>
    </Layout>
  );
};

export default OwnerRegister;
