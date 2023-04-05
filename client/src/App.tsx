import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import MainPage from './Pages/MainPage';
import Home from './Pages/Home';
import Reservation from './Pages/Reservation';
import Search from './Pages/Search';
import SportFields from './Pages/SportFields';
import SFDetail from './Pages/SFDetial';
import Owner from './Pages/Owner';
import SFOwner from './Pages/SFOwner';
import SFOwnerId from './Pages/SFOwnerId';
import AddSFOwner from './Pages/AddSFOwner';
import OwnerRegister from './Pages/OwnerRegister';
import Profile from './Pages/Profile';
import ProfileReservation from './Pages/ProfileReservation';
import Help from './Pages/Help';
import About from './Pages/About';
import Login from './Pages/Login';
import Register from './Pages/Register';

import { useEffect } from 'react';
import { authUser } from './Functions/userPetition';

function App() {
  useEffect(() => {
    localStorage.getItem('tkn') && authUser();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/inicio" element={<Home />}></Route>

        <Route path="/reservas" element={<Reservation />}></Route>
        <Route path="/reservas/:sport" element={<Search />}></Route>
        <Route path="/reservas/:sport/canchas" element={<SportFields />}></Route>
        <Route path="/reservas/:sport/canchas/:id" element={<SFDetail />}></Route>

        <Route path="/propietarios" element={<Owner />}></Route>
        <Route path="/propietarios/canchas" element={<SFOwner />}></Route>
        <Route path="/propietarios/canchas/:id" element={<SFOwnerId />}></Route>
        <Route path="/propietarios/agregar-cancha" element={<AddSFOwner />}></Route>
        <Route path="/propietarios/registrarse" element={<OwnerRegister />}></Route>

        <Route path="/perfil" element={<Profile />}></Route>
        <Route path="/perfil/reservas" element={<ProfileReservation />}></Route>

        <Route path="/ayuda" element={<Help />}></Route>
        <Route path="/nosotros" element={<About />}></Route>

        <Route path="/ingresar" element={<Login />}></Route>
        <Route path="/registro" element={<Register />}></Route>

        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
