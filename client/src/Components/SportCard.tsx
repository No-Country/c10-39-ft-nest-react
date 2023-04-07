import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import PrimaryButton from './PrimaryButton';

interface props {
  children?: React.ReactNode;
  title: string;
  bgImage: string;
}

const SportCard: FC<props> = ({ children, title, bgImage }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('click');
    navigate(`/reservas/tenis`);
  };
  return (
    <div
      className={`mx-1 relative rounded bg-opacity-10 h-[220px] w-full max-w-[700px] lg:mt-20
      bg-[url('https://www.rere.jp/beginners/uploads/2019/09/i-471621500-3-1024x667.jpg')] flex items-center justify-center lg:h-[350px]`}
    >
      <div className="font-segoeScript font-bold text-6xl text-center">{title}</div>
      <div className="absolute bottom-4 right-4">
        <PrimaryButton text="IR" onClick={handleClick}></PrimaryButton>
      </div>
    </div>
  );
};

export default SportCard;
