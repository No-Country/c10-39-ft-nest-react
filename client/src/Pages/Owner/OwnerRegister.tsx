import { useState, type FC, type BaseSyntheticEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

import { AiOutlinePhone } from 'react-icons/ai';
import { HiOutlineIdentification } from 'react-icons/hi';
import Swal from 'sweetalert2';

import Input from '../../Components/inputs/Input';
import Layout from '../../Components/layout/Layout';
import PrimaryButton from '../../Components/PrimaryButton';
import { OwnerRegisterQuery } from '../../Functions/OwnerQuery';
import { type AppUser } from '../../types/App.type';
import type RegisterResponse from '../../types/RegisterResponse.type';

const OwnerRegister: FC = () => {
  const [state, setState] = useState({
    phone: '',
    document: '',
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
    OwnerRegisterQuery(state)
      .then((data) => {
        const datos = { ...data } as RegisterResponse;
        if (datos.id && datos.DNI && datos.phone) {
          toast.success(`${datos.firstName}! ya estas registrado como propietario`, {
            style: {
              background: "#F5F5F5",
              color: '#4CAF50',
            },
          });
          // console.log("esta es la data:", datos)
          return setTimeout(() => window.location.reload(), 2000);
        };
        Swal.fire({
          title: 'Error!',
          text: 'No se ha podido registrar como Propietario.',
          footer: `<b>Tip:</b>Recuerde todos los campos son obligatorios.`,
          icon: 'error',
          showConfirmButton: false,
          cancelButtonText: "Intentar otra vez",
          showCancelButton: true,
          cancelButtonColor: '#4CAF50',
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout title="Registro de propietario">
      <Toaster
        position='top-center'
      />
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
