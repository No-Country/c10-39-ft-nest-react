import { type FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaBasketballBall } from 'react-icons/fa';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import SportMenu from '../SportMenu';

const NavDesktop: FC = () => {
  const [openSecondMenu, setOpenSecondMenu] = useState(false);
  const [openSportMenu, setOpenSportMenu] = useState(false);

  const handleClickSecondMenu = () => {
    setOpenSecondMenu(!openSecondMenu);
    setOpenSportMenu(false);
  };
  const handleClickSportsMenu = () => {
    setOpenSportMenu(!openSportMenu);
    setOpenSecondMenu(false);
  };
  const handleCloseSecondMenu = () => {
    setOpenSecondMenu(false);
    localStorage.removeItem('token');
  };
  const handleCloseSportMenu = () => setOpenSportMenu(false);

  return (
    <div className="hidden lg:block">
      <nav className="sticky z-10 box-border h-[15vh] px-20 text-white bg-primary flex flex-row shadow-lg w-full justify-between items-center">
        <div className="flex gap-10 items-center">
          <div className="bounce text-6xl">
            <Link to={'/inicio'}>
              <FaBasketballBall />
            </Link>
          </div>
          <div className="text-4xl">
            <Link to={'/inicio'}>ALL SPORT</Link>
          </div>
        </div>
        <ul className="flex flex-row gap-4 text-lg mr-2">
          <li>
            <Link className="p-5 rounded-full" to={'/inicio'}>
              INICIO
            </Link>
          </li>
          <li className="relative">
            <button className="flex items-center gap-2" onClick={handleClickSportsMenu}>
              RESERVAR
              <span
                className={`${
                  openSportMenu ? 'rotate-90' : '-rotate-90'
                } text-white align-middle text-2xl transition-transform`}
              >
                <MdKeyboardArrowLeft />
              </span>
            </button>
            <SportMenu handleClick={handleCloseSportMenu} state={openSportMenu} />
          </li>
          <li>
            <Link className="p-5 rounded-full" to={'/propietarios'}>
              PROPIETARIOS
            </Link>
          </li>
          <li>
            <Link className="p-5 rounded-full" to={'/ayuda'}>
              AYUDA
            </Link>
          </li>
          <li>
            <Link className="p-5 rounded-full" to={'/nosotros'}>
              NOSOTROS
            </Link>
          </li>
        </ul>
        <div className="absolute right-3 flex flex-row items-center">
          <div className="bg-black w-10 h-10  rounded-full"></div>
          <div
            onClick={handleClickSecondMenu}
            className={`${
              openSecondMenu ? 'rotate-90' : '-rotate-90'
            } transition-transform cursor-pointer p-1 text-2xl`}
          >
            <MdKeyboardArrowLeft />
          </div>
        </div>
      </nav>
      {openSecondMenu && (
        <ul
          className={`absolute rounded-bl-lg z-20 right-0 transition-transform text-white -top-[11vh] bg-black p-5 flex flex-col gap-5 ${
            openSecondMenu ? 'translate-y-full' : 'translate-y-0'
          }`}
        >
          <li>
            <Link to={'/perfil'}>PERFIL</Link>
          </li>
          <li>
            <Link to={'/perfil/reservar'}>MIS RESERVAS</Link>
          </li>
          <li>
            <Link to={'/propietarios/canchas'}>MIS CANCHAS</Link>
          </li>
          <li className="cursor-pointer border-t-[1px] divide-white">
            <Link onClick={handleCloseSecondMenu} to={'/'}>
              CERRAR SESION
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavDesktop;
