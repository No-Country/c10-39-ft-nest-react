import { type BaseSyntheticEvent, type FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';

import { AiFillEye } from 'react-icons/ai';
import { HiOutlineUser, HiUser } from 'react-icons/hi';
import { IoMdMail } from 'react-icons/io';

import Input from '../../Components/inputs/Input';
import Layout from '../../Components/layout/Layout';
import { registerUser } from '../../Functions/UserQuery';
import NavDesktop from '../../Components/layout/NavDesktop';
import NavMobile from '../../Components/layout/NavMobile';

const Register: FC = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPass: '',
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
    const { confirmPass, ...user } = state;
    if (state.password === confirmPass) {
      registerUser(user)
        .then((query) => {
          if (query?.data.user) {
            toast.success(`Bienvenido ${query.data.user.firstName}! a AllSport`, {
              style: {
                background: "#F5F5F5",
                color: '#4CAF50'
              }
            })
            return setTimeout(() => navigate('/inicio'), 2000)
          };
          Swal.fire({
            title: 'Error!',
            text: 'Faltan completar algunos campos. Si ya tiene cuenta aprete en "Ingresar".',
            footer: `<b>Tip:</b>Recuerde todos los campos son obligatorios.`,
            icon: 'error',
            confirmButtonText: "Ingresar",
            confirmButtonColor: '#4CAF50',
            showCancelButton: true,
            cancelButtonText: "Intentar otra vez",
          }).then((result) => {
            if (result.isConfirmed) return navigate('/ingresar')
          })

        })
        .catch((err) => console.log(err));
    } else {
      console.log('ERROR: Las contraseñas deben ser iguales');
    }
  };

  return (
    <>
      <Toaster
        position='top-center'
      />
      <header className="bg-primary">
        <h1 className="text-white text-2xl pt-10 pb-5 pl-10 lg:text-4xl lg:pl-20 lg:py-10">
          Registrarse
        </h1>
      </header>
      <div className="z-10 pt-5 bg-bg min-h-[90vh]">
        <div className=" w-full m-auto lg:w-2/5 flex flex-col ">
          <form onSubmit={handleSubmit} className="flex flex-col w-full  items-center">
            <div className="flex flex-col w-full items-center gap-5 lg:gap-7 py-12">
              <Input
                type="mail"
                label="Mail"
                icon={<IoMdMail />}
                handleChange={handleChange}
                name="email"
                value={state.email}
              />
              <Input
                type="text"
                label="Nombre"
                handleChange={handleChange}
                name="firstName"
                value={state.firstName}
                icon={<HiOutlineUser />}
              />
              <Input
                type="text"
                label="Apellido"
                icon={<HiUser />}
                name="lastName"
                value={state.lastName}
                handleChange={handleChange}
              />
              <Input
                type="password"
                label="Contraseña"
                handleChange={handleChange}
                name={'password'}
                value={state.password}
                icon={<AiFillEye />}
              />
              <Input
                type="password"
                label="Confirmar contraseña"
                handleChange={handleChange}
                value={state.confirmPass}
                name={'confirmPass'}
                icon={<AiFillEye />}
              />
            </div>
            <input
              className="mt-5 w-10/12 lg:w-2/3 py-2 rounded-full font-bold bg-gradient-to-tr from-gradone to-gradtwo"
              type="submit"
              value="REGISTRARSE"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
