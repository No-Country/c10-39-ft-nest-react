import { FC } from "react";

type props = {
  type: string;
  label: string;
  state: string;
  setState: (string: string) => void;
  icon: any | undefined;
};

const Input: FC<props> = ({ type, label, state, setState, icon }) => {
  const handleChange = ({ target }: { target: HTMLInputElement }) => setState(target.value);

  return (
    <div className="w-10/12 flex flex-col relative">
      <label htmlFor={label} className="translate-y-10 peer-focus:tranlate-y-0">
        {label}
      </label>
      <input
        id={label}
        className="divide-black divide-solid border-b-2 p-3 focus:outline-none focus:border-cyan-500"
        type={type}
        value={state}
        onChange={handleChange}
      />
      {icon && (
        <div className="[&>svg]:absolute [&>svg]:bottom-2 [&>svg]:right-2 [&>svg]:w-6 [&>svg]:h-6">
          {icon}
        </div>
      )}
    </div>
  );
};

export default Input;
