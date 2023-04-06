import { FC, useState } from 'react';
import Layout from '../Components/Layout';
import Input from '../Components/Input';
import { MdEdit } from 'react-icons/md';

const Profile: FC = () => {
  const [name, setName] = useState('Nayib');
  const [lastName, setLastName] = useState('Sales');
  const [mail, setMail] = useState('Nayib1@gmail.com');
  const [password, setPassword] = useState('Pepe');

  return (
    <Layout title="Perfil">
      <div className="flex flex-col items-center w-full">
        <div className="bg-[#000] w-36 h-36 rounded-full m-10"></div>
        <div className="w-full flex flex-col items-center gap-5">
          <Input type="text" label="Nombre" state={name} setState={setName} icon={<MdEdit />} />
          <Input
            type="text"
            label="Apellido"
            state={lastName}
            setState={setLastName}
            icon={<MdEdit />}
          />
          <Input type="mail" label="Mail" state={mail} setState={setMail} icon={<MdEdit />} />
          <Input
            type="password"
            label="Contraseña"
            state={password}
            setState={setPassword}
            icon={<MdEdit />}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
