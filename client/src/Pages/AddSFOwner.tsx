import { type FC, useState, type BaseSyntheticEvent } from 'react';
import { useSelector } from 'react-redux';

import { GiSoccerField } from 'react-icons/gi';
import { GrGroup } from 'react-icons/gr';
import { MdTitle } from 'react-icons/md';

import Input from '../Components/inputs/Input';
import Layout from '../Components/Layout';
import PrimaryButton from '../Components/PrimaryButton';
import { OwnerAddSFQuery } from '../Functions/OwnerQuery';
import { AppUser } from '../types/App.type';

const AddSFOwner: FC = () => {
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
    const token = localStorage.getItem('token') ?? '';
    OwnerAddSFQuery(state, token, userId).catch((err) => console.log(err));
  };

  return (
    <Layout title="Agregar cancha">
      <form onSubmit={handleSubmit} className="relative min-h-[100vh] flex flex-col items-center">
        <div className="bg-[#D9D9D9] rounded-lg w-10/12 cursor-pointer my-[70px] relative h-[225px] lg:h-[400px] lg:w-[800px] text-center ">
          +
        </div>
        <div className="flex flex-col w-full items-center gap-10 lg:w-[700px]">
          <Input
            type="text"
            label="Nombre"
            icon={<MdTitle />}
            handleChange={handleChange}
            value={state.title}
            name={'title'}
          />
          <Input
            type="text"
            label="Tipo de cancha"
            icon={<GiSoccerField />}
            value={state.sportField}
            handleChange={handleChange}
            name={'sportField'}
          />
          <Input
            type="text"
            label="Capacidad"
            icon={<GrGroup />}
            value={state.capacity}
            handleChange={handleChange}
            name={'capacity'}
          />
        </div>
        <div className="absolute bottom-0 right-10 lg:relative lg:my-10 lg:w-[675px] lg:flex lg:justify-end">
          <PrimaryButton text="AGREGAR" />
        </div>
      </form>
    </Layout>
  );
};

export default AddSFOwner;
