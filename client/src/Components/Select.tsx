import { type BaseSyntheticEvent, type FC } from 'react';

interface selectType {
  array: string[];
  type: string;
  label: string;
  value: string;
  name: string;
  handleChange: (event: BaseSyntheticEvent) => void;
  icon?: any;
}

const Select: FC<selectType> = ({ handleChange, name, array, value, label, icon }) => {
  return (
    <div className="w-10/12 flex flex-col relative">
      <select
        onChange={handleChange}
        value={value}
        name={name}
        id={label}
        className="selectArrow bg-bg inputFocus cursor-pointer order-2 transition-colors divide-black divide-solid border-b-2 pb-2 px-2 focus:outline-none focus:border-blue-500"
      >
        <option disabled> Elije un campo</option>
        <option>Cualquier tipo</option>
        {array.length > 0 && array.map((item, index) => <option key={index}>{item}</option>)}
      </select>
      <label
        htmlFor={label}
        className={`${
          value.length === 0 ? 'translate-y-7 translate-x-2' : 'inputWritten'
        } w-max cursor-pointer transition-transform order-1 z-[300] bg-bg`}
      >
        {label}
      </label>
      {icon && (
        <div className="[&>svg]:absolute [&>svg]:bottom-2 [&>svg]:right-2 [&>svg]:w-6 [&>svg]:h-6">
          {icon}
        </div>
      )}
    </div>
  );
};

export default Select;
