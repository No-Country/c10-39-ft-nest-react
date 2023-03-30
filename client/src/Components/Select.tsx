import { FC } from "react";

const Select: FC<{ array: Array<string>; type: string }> = (array, type) => {
  return (
    <select>
      {array.map((item) => (
        <option>{item}</option>
      ))}
    </select>
  );
};

export default Select;
