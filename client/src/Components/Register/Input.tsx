type props = {
  type: string;
  label: string;
  state: string;
  setState: (string: string) => void;
};

export const Input = ({ type, label, state, setState }: props) => {
  const handleChange = ({ target }: { target: HTMLInputElement }) => setState(target.value);

  return (
    <div className="w-10/12 flex flex-col">
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
    </div>
  );
};

export default Input;
