import { type FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { MdEdit } from 'react-icons/md';
// import { BsFillShareFill } from 'react-icons/bs';

interface Props {
  title: string;
  address: string;
}

const ReservationCard: FC<Props> = ({ title, address }) => {
  const [open, setOpen] = useState<any>('');

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="flex flex-col w-full bg-secondary px-5 py-2">
      <span className="opacity-70">{title}</span>
      <div className="flex flex-row w-full justify-between items-center">
        <span className="text-lg">{address}</span>
        <div className="flex flex-row gap-5 text-2xl">
          <button onClick={handleClick}>
            <MdEdit />
          </button>
          {open && (
            <div className="absolute w-full h-full backdrop-blur-sm top-5  flex justify-center items-center">
              <div className="w-10/12 bg-white shadow-lg h-[500px] rounded-lg"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
