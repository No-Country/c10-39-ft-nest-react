import { Link } from "react-router-dom";

import { FaBasketballBall } from "react-icons/fa";

const Home = () => {
  return (
    <div className="relative h-screen w-screen flex flex-col justify-center items-center gap-10">
      <span className="absolute -top-20 -left-20 w-52 bg-primary h-52 rounded-full"></span>
      <span className="absolute -bottom-20 -right-20 w-52 bg-primary h-52 rounded-full"></span>
      <div className="[&>svg]:w-32 [&>svg]:h-32 [&>svg]:text-primary">
        <FaBasketballBall />
      </div>
      <div className="flex flex-col w-full items-center gap-5">
        <Link
          className="w-10/12 py-2 rounded-full text-center font-bold bg-gradient-to-tr from-gradone to-gradtwo"
          to="/login"
        >
          INICIAR SESION
        </Link>
        <Link
          className="w-10/12 py-2 rounded-full text-center font-bold bg-gradone"
          to={"/register"}
        >
          REGISTRARSE
        </Link>
        <Link
          to={"http://localhost:3000/google/callback"}
          className="bg-gradone px-20 py-2 rounded-full"
        >
          Google
        </Link>
      </div>
    </div>
  );
};

export default Home;
