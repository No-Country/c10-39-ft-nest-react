import { useState, type FC, type BaseSyntheticEvent } from 'react';
import { useSelector } from 'react-redux';

import { GiSoccerField } from 'react-icons/gi';
import { GrGroup } from 'react-icons/gr';
import { MdTitle } from 'react-icons/md';

import Input from '../../Components/inputs/Input';
import Layout from '../../Components/layout/Layout';
import PrimaryButton from '../../Components/PrimaryButton';
import { OwnerEditSFQuery } from '../../Functions/OwnerQuery';
import { AppUser } from '../../types/App.type';

const SFownerEdit: FC = () => {
  const [state, setState] = useState({
    title: '',
    sportField: '',
    capacity: '',
  });

  const userId = useSelector((state: AppUser) => state.user?.user?.id);

  const handleChange = (event: BaseSyntheticEvent) => {
    setState((prev) => {
      const target = event.target;
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    // OwnerEditSFQuery(state).catch((err) => console.log(err));
  };

  return (
    <Layout title="Editar cancha">
      <form onSubmit={handleSubmit} className="relative min-h-[100vh] flex flex-col items-center">
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
            name="sportField"
            value={state.sportField}
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
      </form>
    </Layout>
  );
};

export default SFownerEdit;
