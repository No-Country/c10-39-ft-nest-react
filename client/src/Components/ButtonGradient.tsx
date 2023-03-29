import { FC } from "react";

import { Link } from "react-router-dom";

export const ButtonGradient: FC<{ type: string }> = ({ type }) => {
  if (type === "register") {
    return (
      <input
        className="mt-5 w-10/12 py-2 rounded-full font-bold bg-gradient-to-tr from-gradone to-gradtwo"
        type="submit"
        value="REGISTRARSE"
      />
    );
  }
  return <Link to="/login">INICIAR SESION</Link>;
};

export default ButtonGradient;
