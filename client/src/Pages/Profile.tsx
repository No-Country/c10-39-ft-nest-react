import { type FC, useState, type BaseSyntheticEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { HiOutlineUser, HiUser } from 'react-icons/hi';
import { IoMdMail } from 'react-icons/io';

import Input from '../Components/inputs/Input';
import Layout from '../Components/layout/Layout';
import PrimaryButton from '../Components/PrimaryButton';
import { type AppUser } from '../types/App.type';
import { updateUser } from '../Functions/UserQuery';
import { PostFile } from '../Functions/FileQuery';
import { MdEdit } from 'react-icons/md';

const Profile: FC = () => {
  const userInfo = useSelector((state: AppUser) => state.user.user);

  const [state, setState] = useState({
    email: userInfo?.email || '',
    firstName: userInfo?.firstName || '',
    lastName: userInfo?.lastName || '',
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

  const [image, setImage] = useState('');
  const [file, setFile] = useState<null | File>(null);

  const handleFile = (e: BaseSyntheticEvent) => setFile(e.target.files[0]);

  const handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    try {
      if (!userInfo) throw new Error('Error: userInfo is undefined');

      if (!file && !userInfo.image) throw new Error(`Error: file es null y no hay imagen guardada`);
      const image: undefined | string = file ? await PostFile(file) : userInfo.image;

      if (!image) throw new Error('No se pudo guardar la imagen');
      await updateUser({ ...state, image }, userInfo.id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    setState({
      email: userInfo?.email,
      firstName: userInfo?.firstName,
      lastName: userInfo?.lastName,
    });
    setFile(null);
  };

  useEffect(() => {
    setState({
      email: userInfo?.email || '',
      firstName: userInfo?.firstName || '',
      lastName: userInfo?.lastName || '',
    });
    setImage(userInfo?.image ?? '');
  }, [userInfo]);

  return (
    <Layout title="Perfil">
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
        <input type="file" hidden id="fileId" onChange={handleFile} />
        <label
          style={{
            backgroundImage: `url(${image})`,
          }}
          htmlFor="fileId"
          className="group border-2 flex relative justify-center items-center bg cursor-pointer w-36 h-36 rounded-full m-10 lg:m-20 lg:w-40 lg:h-40"
        >
          <MdEdit className="p-2 rounded-full box-content text-2xl bg-primary absolute bottom-0 right-0 border-2 lg:hidden lg:group-hover:flex lg:text-4xl lg:relative lg:border-0 lg:backdrop-blur-sm lg:bg-[transparent]" />
        </label>
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
