import { type FC, useState } from 'react';
import HoursList from './HoursList';

interface selectType {
  label: string;
  value: string;
  handleClick: (option: string) => void;
  icon?: any;
}

const SelectHour: FC<selectType> = ({ handleClick, value, label, icon }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div className="w-10/12 flex flex-col relative">
      <input
        id={label}
        className={
          'inputFocus bg-bg cursor-pointer order-2 transition-colors divide-black divide-solid border-b-2 pb-2 px-2 focus:outline-none'
        }
        readOnly
        type={'text'}
        value={value !== '' ? `${value}:00 - ${Number(value) + 1}:00` : ''}
        onClick={handleOpen}
      />
      <label
        htmlFor={label}
        className={`${
          value.length === 0 ? 'translate-y-7 translate-x-2' : 'inputWritten'
        } w-max cursor-pointer transition-transform order-1 z-[300]`}
      >
        {label}
      </label>
      {open && (
        <div className="absolute top-[58px] -left-0 z-[500] lg:top-0 lg:-left-full">
          <HoursList handleClick={handleOpen} getAllHours={true} handleSelect={handleClick} />
        </div>
      )}
      {icon && (
        <div className="[&>svg]:absolute [&>svg]:top-7 [&>svg]:right-2 [&>svg]:w-6 [&>svg]:h-6 pointer-events-none">
          {icon}
        </div>
      )}
    </div>
  );
};

export default SelectHour;
