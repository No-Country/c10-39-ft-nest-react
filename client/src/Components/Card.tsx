import { FC } from 'react';
import PrimaryButton from './PrimaryButton';
import { useNavigate, useParams } from 'react-router-dom';

type props = {
  title: string;
  route: string;
};

const Card: FC<props> = ({ title, route }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`${route}`);
  return (
    <div className="mx-1  my-[70px]">
      <div className="relative rounded-t  bg-primary bg-opacity-80 w-full h-[150px]">
        <h1 className=" absolute bottom-4 left-4 text-white text-xl w-10/12 text-left font-semibold">
          {title}
        </h1>
      </div>
      <div className=" relative rounded-b w-full h-[48px] shadow-lg bottom-0 bg-white">
        <div className="absolute bottom-1 right-1">
          <PrimaryButton text="IR" onClick={handleClick}></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
