import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import PrimaryButton from '../Components/PrimaryButton';

type sportFieldType = {
  complexData: boolean;
  btnText: string;
  route: string;
};

const SportField: FC<sportFieldType> = ({ complexData, btnText, route }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(route);

  return (
    <div className="mb-5 shadow-lg">
      <div className="bg-cover bg-[url('https://web-assets.playfinder.com/wp-content/uploads/2017/12/27164405/Bookteq-CRM-email-clay-hard-tennis-600x260.jpg')] w-full h-52"></div>
      <div className="flex flex-col gap-5 p-5 bg-white">
        <div>
          <span className="block text-3xl ">Titulo</span>
          {complexData && <span className="block opacity-70 relative bottom-2">Ubicacion</span>}
        </div>
        <div className="flex flex-row w-full justify-left gap-5 items-center">
          <span className="w-1/2">Estrellas</span>
          <PrimaryButton text={btnText} onClick={handleClick} />
        </div>
        {complexData && (
          <>
            <span>Ver más</span>
            <ul>
              <li>Estacionamiento</li>
              <li>Asador</li>
              <li>Vestuario</li>
              <li>Resto-Bar</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default SportField;
