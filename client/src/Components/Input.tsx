import { type FC, useState } from 'react';

interface props {
  type: string;
  label: string;
  value: string;
  handleValues: () => void;

  icon?: any;
}

const Input: FC<props> = ({ type, label, icon, value, handleValues }) => {
  const [inputWritten, setInputWritten] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputWritten(value.length > 0 ? 'translate-y-7 translate-x-2' : 'inputWritten');
    handleValues();
  };

  return (
    <div className="w-10/12 flex flex-col relative">
      <input
        id={label}
        className={
          'inputFocus cursor-pointer bg-bg order-2 transition-colors divide-black divide-solid border-b-2 pb-2 px-2 focus:outline-none'
        }
        type={type}
        value={value}
        onChange={handleChange}
      />
      <label
        htmlFor={label}
        className={`${inputWritten} w-max cursor-pointer transition-transform order-1 z-[300]`}
      >
        {label}
      </label>
      {icon && (
        <div className="[&>svg]:absolute [&>svg]:bottom-2 [&>svg]:right-2 [&>svg]:w-6 [&>svg]:h-6 pointer-events-none">
          {icon}
        </div>
      )}
    </div>
  );
};

export default Input;
