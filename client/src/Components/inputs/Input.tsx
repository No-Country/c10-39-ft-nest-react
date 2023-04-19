import { type FC, type BaseSyntheticEvent } from 'react';

interface props {
  type: string;
  label: string;
  value: string | number;
  name: string;
  handleChange: (event: BaseSyntheticEvent) => void;
  icon?: any;
  validationError?: boolean;
}

const Input: FC<props> = ({
  type,
  label,
  icon,
  value,
  handleChange,
  name,
  validationError = true,
}) => {
  return (
    <div className="w-10/12 flex flex-col relative h-[60px]">
      <input
        id={label}
        className={`${
          validationError ? 'divide-red' : 'divide-black'
        } inputFocus bg-[transparent] order-2 transition-colors  border-b-2 pb-2 pl-2 pr-10 focus:outline-none`}
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
        <div className="[&>svg]:absolute [&>svg]:bottom-2 [&>svg]:right-2 [&>svg]:w-6 [&>svg]:h-6 pointer-events-none">
          {icon}
        </div>
      )}
      {validationError && (
        <span className="order-3 text-red">Error el campo debe tener al menos 5 caracteres</span>
      )}
    </div>
  );
};

export default Input;
