import { FC } from "react";
import { useNavigate } from "react-router-dom";

import PrimaryButton from "../Components/PrimaryButton";

const SportField: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/reservas/:sport/canchas/id");

  return (
    <div>
      <div className="bg-primary w-full h-52"></div>
      <div className="flex flex-col gap-5 p-5 bg-white">
        <div>
          <span className="block text-3xl ">Titulo</span>
          <span className="block opacity-70 relative bottom-2">Ubicacion</span>
        </div>
        <div className="flex flex-row w-full justify-left gap-5">
          <span className="w-1/2">Estrellas</span>
          <PrimaryButton text="RESERVAR" onClick={handleClick} />
        </div>
        <span>Ver más</span>
        <ul>
          <li>Estacionamiento</li>
          <li>Asador</li>
          <li>Vestuario</li>
          <li>Resto-Bar</li>
        </ul>
      </div>
    </div>
  );
};

export default SportField;
