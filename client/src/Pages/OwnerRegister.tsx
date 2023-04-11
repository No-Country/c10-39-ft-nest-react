import { useState, type FC, type BaseSyntheticEvent } from 'react';
import { useSelector } from 'react-redux';

import { AiOutlinePhone } from 'react-icons/ai';
import { HiOutlineIdentification } from 'react-icons/hi';

import Input from '../Components/Input';
import Layout from '../Components/Layout';
import PrimaryButton from '../Components/PrimaryButton';
import { OwnerRegisterQuery } from '../Functions/OwnerQuery';

const OwnerRegister: FC = () => {
  const [state, setState] = useState({
    phone: '',
    document: '',
  });

  const userId = useSelector<any>((state) => state.user?.user?.id);

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
    OwnerRegisterQuery(state, token, userId)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <Layout title="Registro de propietario">
      <form onSubmit={handleSubmit} className="relative min-h-[100vh] flex flex-col items-center">
        <div className="bg-[#D9D9D9] rounded-lg w-10/12 cursor-pointer my-[70px] relative h-[225px] lg:h-[400px] lg:w-[800px] text-center ">
          +
        </div>
        <div className="flex flex-col w-full items-center gap-10 lg:w-[700px]">
          <Input
            type="text"
            label="Documento"
            icon={<HiOutlineIdentification />}
            handleChange={handleChange}
            value={state.document}
            name={'document'}
          />
          <Input
            type="text"
            label="Numero de telefono"
            icon={<AiOutlinePhone />}
            handleChange={handleChange}
            value={state.phone}
            name={'phone'}
          />
        </div>
        <div className="absolute bottom-0 right-10 lg:relative lg:my-10 lg:w-[675px] lg:flex lg:justify-end">
          <PrimaryButton text="AGREGAR" />
        </div>
      </form>
    </Layout>
  );
};

export default OwnerRegister;
