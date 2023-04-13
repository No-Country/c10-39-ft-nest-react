import { BaseSyntheticEvent, useEffect, useState } from 'react';
import Input from '../Components/Input';
import Layout from '../Components/Layout';
import PrimaryButton from '../Components/PrimaryButton';
import { GetComplexQuery, PostComplexQuery } from '../Functions/ComplexQuery';

import { useSelector } from 'react-redux';
import { AppComplex } from '../types/App.type';

const OwnerComplex = () => {
  const complexInfo = useSelector((state: AppComplex) => state.complex.complex);

  const [state, setState] = useState({
    id: '',
    name: '',
    ubication: '',
    day: '',
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

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const { id, ...data } = state;
    PostComplexQuery(data, id).catch((err) => console.log(err));
  };

  const handleCancel = () =>
    setState({
      id: complexInfo.id,
      name: complexInfo.name,
      ubication: complexInfo.ubication,
      day: complexInfo.day,
    });

  useEffect(() => {
    GetComplexQuery(setState).catch((err) => console.log(err));
  }, []);

  return (
    <Layout title="Complejo">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-10 lg:flex-row lg:w-1/2 lg:justify-center lg:h-[500px]">
          <div className="w-full flex flex-col items-center gap-5 mt-10 lg:w-4/6">
            <Input
              type="text"
              label="Nombre del complejo"
              value={state.name}
              name={'name'}
              handleChange={handleChange}
            />
            <Input
              type="text"
              label="Ubicacion"
              value={state.ubication}
              name={'ubication'}
              handleChange={handleChange}
            />
            <Input
              type="text"
              label="Turno"
              value={state.day}
              name={'day'}
              handleChange={handleChange}
            />
          </div>
          <ul className="w-10/12 mt-5 flex flex-col gap-3 text-lg lg:w-2/6 lg:relative lg:top-8">
            <li>Estacionamiento</li>
            <li>Asador</li>
            <li>Vestuario</li>
            <li>Resto-Bar</li>
            <li>Tienda Deportiva</li>
          </ul>
        </div>
        <div className="flex w-10/12 justify-between absolute bottom-0 lg:relative lg:w-4/12 lg:m-10">
          <PrimaryButton text="CANCELAR" alternative={true} onClick={handleCancel} />
          <PrimaryButton text="GUARDAR" />
        </div>
      </form>
    </Layout>
  );
};

export default OwnerComplex;
