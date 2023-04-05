import { FC, useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import { GoKebabVertical } from "react-icons/go";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaBasketballBall } from "react-icons/fa";

type props = {
  children: React.ReactNode;
  title: string;
};

import { Link } from "react-router-dom";

const Layout: FC<props> = ({ children, title }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSecondMenu, setOpenSecondMenu] = useState(false);

  const handleClickMenu = () => setOpenMenu(!openMenu);
  const handleCloseMenu = () => setOpenMenu(false);
  const handleClickSecondMenu = () => setOpenSecondMenu(!openSecondMenu);

  return (
    <div>
      <header>
        <nav className="z-[300] px-5 bg-primary flex justify-center shadow-lg fixed w-full h-[80px]">
          <div className=" gap-7 justify-start flex w-full items-center pb-5 pt-10 ">
            <button className="text-white text-2xl align-middle" onClick={handleClickMenu}>
              <GiHamburgerMenu />
            </button>
            <h1 className="text-white text-2xl w-10/12 text-left font-semibold">{title}</h1>
          </div>
          <div className=" gap-7 justify-end flex w-full items-center pb-5 pt-10 ">
            <button className="text-white align-middle text-2xl -rotate-90">
              <MdKeyboardArrowLeft />
            </button>
            <div className="relative text-white text-2xl">
              <div onClick={handleClickSecondMenu}>
                <GoKebabVertical />
              </div>
              <div
                className={`${
                  openSecondMenu ? "flex" : "hidden"
                }   items-center absolute -left-52 top-0 h-40 w-52 bg-[#000] py-5 rounded-md`}
              >
                <span className="pl-5 py-5 active:bg-primary w-full">Cerrar sesion</span>
              </div>
            </div>
          </div>
          <div
            className={`${
              openMenu ? "tranlate-x-0" : "translate-x-[-100%]"
            } transition-transform absolute left-0 w-5/6 h-screen bg-[#000] text-white pt-10`}
          >
            <div className="flex flex-row w-full justify-between px-5">
              <Link to={"/home"} className="text-2xl">
                <FaBasketballBall />
              </Link>
              <div className="text-2xl" onClick={handleClickMenu}>
                <MdKeyboardArrowLeft />
              </div>
            </div>
            <div className="flex flex-col w-full items-center gap-16 mt-10">
              <div className="w-36 h-36 bg-white rounded-full"></div>
              <ul className="flex flex-col items-center gap-10 text-2xl">
                <Link onClick={handleCloseMenu} to={"/perfil"}>
                  Perfil
                </Link>
                <Link onClick={handleCloseMenu} to={"/perfil/reservas"}>
                  Mis reservas
                </Link>
                <Link onClick={handleCloseMenu} to={"/propietarios/canchas"}>
                  Mis canchas
                </Link>
                <Link onClick={handleCloseMenu} to={"/nosotros"}>
                  Nosotros
                </Link>
                <Link onClick={handleCloseMenu} to={"/ayuda"}>
                  Ayuda
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="z-10 mb-[100px] pt-[80px] bg-secondary min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;
