import { type FC } from 'react';
import { Link } from 'react-router-dom';

import { MdEdit } from 'react-icons/md';
// import { BsFillShareFill } from 'react-icons/bs';

interface Props {
  title: string;
  address: string;
}

const ReservationCard: FC<Props> = ({ title, address }) => {
  return (
    <div className='flex flex-col w-full bg-secondary px-5 py-2'>
      <span className='opacity-70'>{title}</span>
      <div className='flex flex-row w-full justify-between items-center'>
        <span className='text-lg'>{address}</span>
        <div className='flex flex-row gap-5 text-2xl'>
          <Link to={'/reservar/:sport/canchas/:id'}>
            <MdEdit />
          </Link>
          {/* <BsFillShareFill /> */}
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
