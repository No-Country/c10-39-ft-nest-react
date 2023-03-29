import { FC } from "react";

type props = {
  type: string;
  label: string;
  state: string;
  setState: (string: string) => void;
  icon: any | undefined;
  rounded: boolean;
};

const Input: FC<props> = ({ type, label, state, setState, icon, rounded }) => {
  const handleChange = ({ target }: { target: HTMLInputElement }) => setState(target.value);

  const handleRound: () => string = () => {
    return rounded ? "20px" : "unset";
  };

  return (
    <div className="w-10/12 flex flex-col relative">
      <input
        id={label}
        style={{ borderRadius: handleRound() }}
        className="inputFocus cursor-pointer order-2 transition-colors divide-black divide-solid border-b-2 pb-2 px-2 focus:outline-none focus:border-blue-500"
        type={type}
        value={state}
        onChange={handleChange}
      />
      <label
        htmlFor={label}
        className="translate-y-7 translate-x-2 w-max cursor-pointer transition-transform order-1"
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

export default Input;
