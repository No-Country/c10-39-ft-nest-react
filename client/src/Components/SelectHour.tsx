import { type FC, useState, type BaseSyntheticEvent } from 'react';

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

  const handleOption = (item: string) => {
    handleClick(item);
    handleOpen();
  };

  const selectValue = () => {
    if (value !== '') {
      let nextNum = Number(value) + 1;
      if (nextNum === 24) nextNum = 0;
      return `${value}:00 - ${nextNum}:00`;
    }
  };

  return (
    <div className="w-10/12 flex flex-col relative">
      <input
        id={label}
        className={
          'inputFocus bg-bg cursor-pointer order-2 transition-colors divide-black divide-solid border-b-2 pb-2 px-2 focus:outline-none'
        }
        readOnly
        type={'text'}
        value={selectValue()}
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
        <div className="absolute top-[58px] -left-0 z-[500] lg:-top-10 lg:-left-[245px]">
          <HoursList handleClick={handleOpen} getAllHours={true} handleSelect={handleOption} />
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
