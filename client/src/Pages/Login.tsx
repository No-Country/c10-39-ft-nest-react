import { BaseSyntheticEvent, FC, useState } from 'react';
import { FaBasketballBall } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Functions/userPetition';

import { useSelector } from 'react-redux';

const Login: FC = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    loginUser({ mail, password })
      .then(() => {
        navigate('/inicio');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="relative h-screen w-screen flex flex-col justify-center items-center gap-10 bg-primary">
      <div>
        <FaBasketballBall className="lg:w-[272px] lg:h-[248px]   w-[128px] h-[128px] text-gradone" />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col w-full items-center gap-5">
        <div className="lg:w-1/3 w-full flex justify-center text-lg">
          <input
            className="py-4 px-5 rounded-full focus:outline-none w-10/12"
            type="mail"
            placeholder="Mail"
            value={mail}
            onChange={(event) => {
              setMail(event.target.value);
            }}
          />
        </div>
        <div className="lg:w-1/3  w-full flex justify-center text-lg">
          <input
            className="py-4 px-5 rounded-full focus:outline-none w-10/12"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <input
          className="mt-5 w-28 py-2 rounded-full font-bold bg-gradone"
          type="submit"
          value="Enviar"
        />
      </form>
    </div>
  );
};

export default Login;
