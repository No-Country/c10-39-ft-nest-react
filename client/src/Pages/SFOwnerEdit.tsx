import { type FC } from 'react';

import Input from '../Components/Input';
import Layout from '../Components/Layout';
import PrimaryButton from '../Components/PrimaryButton';
import { GiSoccerField } from 'react-icons/gi';
import { GrGroup } from 'react-icons/gr';
import { AiOutlineClockCircle } from 'react-icons/ai';

const SFownerEdit: FC = () => {
  return (
    <Layout title="Editar cancha">
      <div className="bg-[#D9D9D9] cursor-pointer mx-1 my-[70px] relative rounded h-[227px] text-center ">
        +
      </div>
      <div className="flex flex-col w-full items-center gap-10">
        <Input
          type="text"
          label="Tipo de cancha"
          icon={<GiSoccerField />}
          state=""
          setState={() => {}}
        />
        <Input type="text" label="Capacidad" icon={<GrGroup />} state="" setState={() => {}} />
        <Input
          type="text"
          label="Horario"
          icon={<AiOutlineClockCircle />}
          state=""
          setState={() => {}}
        />
      </div>
      <div className="absolute bottom-10 right-10">
        <PrimaryButton text="BUSCAR" />
      </div>
    </Layout>
  );
};

export default SFownerEdit;
