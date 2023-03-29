import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link
        className="mt-5 w-10/12 py-2 rounded-full font-bold bg-gradient-to-tr from-gradone to-gradtwo"
        to="/login"
      >
        INICIAR SESION
      </Link>
      <Link to={"/register"}>Registrarse</Link>
    </div>
  );
};

export default Home;
