import { type FC, type BaseSyntheticEvent } from 'react';

interface props {
  type: string;
  label: string;
  value: string | number;
  name: string;
  handleChange: (event: BaseSyntheticEvent) => void;
  icon?: any;
}

const Input: FC<props> = ({ type, label, icon, value, handleChange, name }) => {
  return (
    <div className='w-10/12 flex flex-col relative'>
      <input
        id={label}
        className={
          'inputFocus bg-bg order-2 transition-colors divide-black divide-solid border-b-2 pb-2 px-2 focus:outline-none'
        }
        type={type}
        value={value}
        onChange={handleChange}
        name={name}
      />
      <label
        htmlFor={label}
        className={`${
          `${value}`.length === 0 ? 'translate-y-7 translate-x-2' : 'inputWritten'
        } w-max cursor-pointer transition-transform order-1 z-[300]`}
      >
        {label}
      </label>
      {icon && (
        <div className='[&>svg]:absolute [&>svg]:bottom-2 [&>svg]:right-2 [&>svg]:w-6 [&>svg]:h-6 pointer-events-none'>
          {icon}
        </div>
      )}
    </div>
  );
};

export default Input;
