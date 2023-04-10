import { type BaseSyntheticEvent, type FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AiFillEye } from 'react-icons/ai';
import { HiOutlineUser, HiUser } from 'react-icons/hi';
import { IoMdMail } from 'react-icons/io';

import Input from '../Components/Input';
import Layout from '../Components/Layout';
import { registerUser } from '../Functions/UserQuery';

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

    console.log(state);
  };
  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    registerUser(state)
      .then(() => navigate(`/inicio`))
      .catch((err) => console.log(err));
  };

  return (
    <Layout title="Registrarse">
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
    </Layout>
  );
};

export default Register;
