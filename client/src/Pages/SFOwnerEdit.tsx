import { useState, type FC, type BaseSyntheticEvent } from 'react';

import { GiSoccerField } from 'react-icons/gi';
import { GrGroup } from 'react-icons/gr';
import { MdTitle } from 'react-icons/md';

import Input from '../Components/Input';
import Layout from '../Components/Layout';
import PrimaryButton from '../Components/PrimaryButton';

const SFownerEdit: FC = () => {
  const [state, setState] = useState({
    fieldType: '',
    title: '',
    capacity: '',
  });

  const handleChange = (event: BaseSyntheticEvent) => {
    setState((prev) => {
      const target = event.target;
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };

  return (
    <Layout title="Editar cancha">
      <div className="relative min-h-[100vh] flex flex-col items-center">
        <div className="bg-[#D9D9D9] rounded-lg w-10/12 cursor-pointer my-[70px] relative h-[225px] lg:h-[400px] lg:w-[800px] text-center ">
          +
        </div>
        <div className="flex flex-col w-full items-center gap-10 lg:w-[700px]">
          <Input
            type="text"
            label="Titulo"
            icon={<MdTitle />}
            handleChange={handleChange}
            name="title"
            value={state.title}
          />
          <Input
            type="text"
            label="Tipo de cancha"
            icon={<GiSoccerField />}
            handleChange={handleChange}
            name="fieldType"
            value={state.fieldType}
          />
          <Input
            type="text"
            label="Capacidad"
            icon={<GrGroup />}
            handleChange={handleChange}
            name="capacity"
            value={state.capacity}
          />
        </div>
        <div className="absolute bottom-0 right-10 lg:relative lg:my-10 lg:w-[675px] lg:flex lg:justify-end">
          <PrimaryButton text="EDITAR" />
        </div>
      </div>
    </Layout>
  );
};

export default SFownerEdit;
