import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import PrimaryButton from './PrimaryButton';

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
      className={`mx-1 relative rounded h-[220px] max-w-[700px]
      bg-[url(${bgImage})] flex items-center justify-center lg:h-[350px]`}
    >
      <div className='font-segoeScript  bg-opacity-10 font-bold text-6xl text-center'>{title}</div>
      <div className='absolute bottom-4 right-4'>
        <PrimaryButton text='IR' onClick={handleClick}></PrimaryButton>
      </div>
    </div>
  );
};

export default SportCard;
