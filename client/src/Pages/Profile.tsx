import { type FC, useState, type BaseSyntheticEvent } from 'react';

import { AiFillEye } from 'react-icons/ai';
import { HiOutlineUser, HiUser } from 'react-icons/hi';
import { IoMdMail } from 'react-icons/io';

import Input from '../Components/Input';
import Layout from '../Components/Layout';
import PrimaryButton from '../Components/PrimaryButton';

const Profile: FC = () => {
  const [state, setState] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
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
    <Layout title="Perfil">
      <div className="flex flex-col items-center w-full relative min-h-[85vh]">
        <div className="bg-black w-36 h-36 rounded-full m-10 lg:m-20 lg:w-40 lg:h-40"></div>
        <div className="w-full flex flex-col items-center gap-5 lg:w-5/12">
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
            type="mail"
            label="Mail"
            icon={<IoMdMail />}
            handleChange={handleChange}
            name="email"
            value={state.email}
          />
          <Input
            type="password"
            label="Contraseña"
            handleChange={handleChange}
            name={'password'}
            value={state.password}
            icon={<AiFillEye />}
          />
        </div>
        <div className="flex w-10/12 justify-between absolute bottom-0 lg:relative lg:w-4/12 lg:m-10">
          <PrimaryButton text="CANCELAR" alternative={true} />
          <PrimaryButton text="GUARDAR" />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
