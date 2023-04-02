import { FC } from "react";
import PrimaryButton from "./PrimaryButton";
import { useNavigate, useParams } from "react-router-dom";

type props = {
  title: string;
};

const Card: FC<props> = ({ title }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/reservas`);
  return (
    <div className="mt-3 mb-10">
      <div className="relative bg-primary bg-opacity-80 w-full h-[200px]">
        <h1 className=" absolute bottom-4 left-4 text-white text-xl w-10/12 text-left font-semibold">
          {title}
        </h1>
      </div>
      <div className=" relative w-full h-[48px] shadow-lg bottom-0 bg-white">
        <div className="absolute bottom-1 right-1">
          <PrimaryButton text="IR" onClick={handleClick}></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
