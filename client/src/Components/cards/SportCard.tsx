import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import PrimaryButton from '../PrimaryButton';

interface props {
  title: string;
  bgImage: string;
  href: string;
}

const SportCard: FC<props> = ({ title, bgImage, href }) => {
  const navigate = useNavigate();
  console.log(bgImage);
  const handleClick = () => navigate(href);

  return (
    <div
      //Opacity
      // style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3)), url(${bgImage})` }}
      style={{ backgroundImage: `url(${bgImage})` }}
      className={`mx-1 relative rounded h-[220px] max-w-[700px] flex items-center justify-center lg:h-[350px] bg-cover bg-center`}
    >
      <div className="font-segoeScript  bg-opacity-10 font-bold text-6xl text-center">{title}</div>
      <div className="absolute bottom-4 right-4">
        <PrimaryButton text="IR" onClick={handleClick}></PrimaryButton>
      </div>
    </div>
  );
};

export default SportCard;
