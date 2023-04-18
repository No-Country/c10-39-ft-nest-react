import { FC, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import PrimaryButton from '../PrimaryButton';
import { sportData } from '../../types/Sport.type';

interface sportFieldType {
  complexData: boolean;
  btnText: string;
  route: string;
  item: sportData;
}

const SportField: FC<sportFieldType> = ({ complexData, btnText, route, item }) => {
  const [moreInfo, setMoreInfo] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setMoreInfo(!moreInfo);

  return (
    <div className="mb-5 shadow-lg">
      <div
        style={{ backgroundImage: `url(${item?.images[0]})` }}
        className="bg-cover bg-center w-full h-52 rounded-t-lg"
      ></div>
      <div className="flex flex-col gap-5 p-5 bg-white rounded-b-lg">
        <div>
          <span className="block text-3xl ">{item?.name}</span>
          {complexData && (
            <span className="block opacity-70 relative bottom-2 text-lg">
              {item?.sportsComplex?.ubication}
            </span>
          )}
        </div>
        <div
          className={`${
            complexData ? 'items-center' : 'gap-5 flex-row-reverse'
          } flex w-full justify-left flex-wrap`}
        >
          {complexData ? (
            <span className="w-1/2">Estrellas</span>
          ) : (
            <PrimaryButton text="ADMINISTRAR" onClick={() => navigate('/propietarios/turnos')} />
          )}
          <PrimaryButton
            text={btnText}
            onClick={() => navigate(route)}
            alternative={!complexData}
          />
        </div>
        {complexData && (
          <>
            <div className="text-lg flex items-center justify-between w-[125px]">
              <span onClick={handleClick} className="cursor-pointer">
                {moreInfo ? 'Ver menos' : 'Ver más'}
              </span>
              <span
                onClick={handleClick}
                className={`${moreInfo ? 'rotate-90' : '-rotate-90'} transition-all cursor-pointer`}
              >
                <MdKeyboardArrowLeft />
              </span>
            </div>
            <ul
              className={`${moreInfo ? 'h-[140px]' : 'h-0'} transition-all text-lg overflow-hidden`}
            >
              <li>Estacionamiento</li>
              <li>Parrilla</li>
              <li>Casillero</li>
              <li>Baños</li>
              <li>Duchas</li>
              <li>Resto Bar</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default SportField;
