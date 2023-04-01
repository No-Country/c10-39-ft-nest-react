import { BaseSyntheticEvent, FC, useState } from "react";
import { FaBasketballBall } from "react-icons/fa";
import Input from "../Components/Input";
import { useNavigate, useParams } from "react-router-dom";
import { loginUser } from "../Functions/userPetition";

const Login: FC = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    loginUser({ mail, password })
      .then(() => {
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="relative h-screen w-screen flex flex-col justify-center items-center gap-10 bg-primary">
      <div className="[&>svg]:w-32 [&>svg]:h-32 [&>svg]:text-gradone">
        <FaBasketballBall />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full items-center gap-5"
      >
        <Input
          type="mail"
          label="Email"
          state={mail}
          setState={setMail}
          rounded={true}
        />
        <Input
          type="password"
          label="Contraseña"
          state={password}
          setState={setPassword}
          rounded={true}
        />
        <input
          className="mt-5 w-28 py-2 rounded-full font-bold bg-gradone"
          type="submit"
          value="Enviar"
        />
      </form>
    </div>
  );
};

export default Login;
