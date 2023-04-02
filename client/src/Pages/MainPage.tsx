import { Link } from "react-router-dom";

import { FaBasketballBall } from "react-icons/fa";

const MainPage = () => {
  return (
    <div className="relative min-h-screen min-w-screen overflow-hidden flex flex-col justify-center items-center gap-10">
      <span className="absolute  -top-20 -left-20 lg:-top-[120px] lg:-left-[120px] w-52 bg-primary h-52 lg:w-[500px] lg:h-[500px] rounded-full"></span>
      <span className="absolute -bottom-20 -right-20 lg:-bottom-[120px] lg:-right-[120px] w-52 bg-primary h-52 lg:w-[500px] lg:h-[500px]  rounded-full"></span>
      <div>
        <FaBasketballBall className="lg:w-[272px] lg:h-[248px]   w-[128px] h-[128px] text-primary"></FaBasketballBall>
      </div>
      <div className="flex flex-col w-full items-center gap-5">
        <Link
          className="w-10/12 lg:w-1/5 py-3 rounded-full text-center font-bold bg-gradient-to-tr from-gradone to-gradtwo"
          to="/login"
        >
          INICIAR SESION
        </Link>
        <Link
          className="w-10/12 lg:w-1/5 py-3 rounded-full text-center font-bold bg-gradone"
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

export default MainPage;
