import { type FC, useState, type BaseSyntheticEvent } from 'react';
import { useSelector } from 'react-redux';

import { AiFillEye } from 'react-icons/ai';
import { HiOutlineUser, HiUser } from 'react-icons/hi';
import { IoMdMail } from 'react-icons/io';

import Input from '../Components/Input';
import Layout from '../Components/Layout';
import PrimaryButton from '../Components/PrimaryButton';
import { type AppUser } from '../types/App.type';
import { updateUser } from '../Functions/UserQuery';

const Profile: FC = () => {
  const userInfo = useSelector((state: AppUser) => state.user.user);

  const [state, setState] = useState({
    email: userInfo?.email || '',
    firstName: userInfo?.firstName || '',
    lastName: userInfo?.lastName || '',
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

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token') ?? '';
    updateUser(state, token, userInfo.id).catch((err) => console.log(err));
  };

  const handleCancel = () =>
    setState({
      email: userInfo?.email,
      firstName: userInfo?.firstName,
      lastName: userInfo?.lastName,
      password: '',
    });

  return (
    <Layout title="Perfil">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full relative min-h-[85vh]"
      >
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
          <PrimaryButton text="CANCELAR" alternative={true} onClick={handleCancel} />
          <PrimaryButton text="GUARDAR" />
        </div>
      </form>
    </Layout>
  );
};

export default Profile;
