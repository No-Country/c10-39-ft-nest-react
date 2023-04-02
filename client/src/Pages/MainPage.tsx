import { Link } from "react-router-dom";

import { FaBasketballBall } from "react-icons/fa";
import { useEffect } from "react";
import { authUser } from "../Functions/userPetition";

const MainPage = () => {
  useEffect(() => {
    setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");
      if (token) {
        localStorage.setItem("tkn", token);
        authUser()
          .then(() => {
            // Obtener la URL actual
            let url = window.location.href;

            // Buscar el parámetro "token" y su valor
            let regex = /[?&]token=([^&#]*)/;
            let match = regex.exec(url);

            // Si se encontró el parámetro "token"
            if (match) {
              // Eliminar el parámetro y su valor de la URL
              url = url.replace(match[0], "");

              // Reemplazar la URL actual sin el parámetro "token"
              window.history.replaceState(null, "", url);
            }
          })
          .then(() => (window.location.pathname = "/home"));
      }
    }, 50);
  }, []);

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
        <div
          onClick={() => {
            window.location.href = `${
              import.meta.env.VITE_BACKEND_URL
            }/auth/google`;
          }}
          className="bg-gradone px-20 py-2 rounded-full"
        >
          Google
        </div>
      </div>
    </div>
  );
};

export default MainPage;
