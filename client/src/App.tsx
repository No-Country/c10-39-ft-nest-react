import { useEffect } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import 'react-calendar/dist/Calendar.css';

import { authUser } from './Functions/UserQuery';
import About from './Pages/About';
import AddSFOwner from './Pages/Owner/AddSFOwner';
import Help from './Pages/Help';
import Home from './Pages/Home';
import Login from './Pages/Auth/Login';
import MainPage from './Pages/Auth/MainPage';
import Owner from './Pages/Owner/Owner';
import OwnerComplex from './Pages/Owner/OwnerComplex';
import Profile from './Pages/Profile';
import ProfileReservation from './Pages/ProfileReservation';

import Register from './Pages/Auth/Register';
import Reservation from './Pages/Sports/Reservation';
import Search from './Pages/Sports/Search';
import SFDetail from './Pages/Sports/SFDetial';
import SFOwner from './Pages/Owner/SFOwner';
import SFownerEdit from './Pages/Owner/SFOwnerEdit';
import SportFields from './Pages/Sports/SportFields';
import Turns from './Pages/Owner/Turns';

import Dani from './Pages/Dani';

function App() {
  useEffect(() => {
    localStorage.getItem('token') && authUser().catch(() => console.log('Auth Failed'));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/inicio' element={<Home />}></Route>

        <Route path='/reservar' element={<Reservation />}></Route>
        <Route path='/reservar/:sport' element={<Search />}></Route>
        <Route path='/reservar/:sport/canchas' element={<SportFields />}></Route>
        <Route path='/reservar/:sport/canchas/:id' element={<SFDetail />}></Route>

        <Route path='/propietarios' element={<Owner />}></Route>
        <Route path='/propietarios/canchas' element={<SFOwner />}></Route>
        <Route path='/propietarios/canchas/:id' element={<AddSFOwner edit={true} />}></Route>
        <Route path='/propietarios/turnos' element={<Turns />}></Route>
        <Route path='/propietarios/agregar-cancha' element={<AddSFOwner />}></Route>
        <Route path='/propietarios/complejo' element={<OwnerComplex />}></Route>

        <Route path='/perfil' element={<Profile />}></Route>
        <Route path='/perfil/reservar' element={<ProfileReservation />}></Route>

        <Route path='/ayuda' element={<Help />}></Route>
        <Route path='/nosotros' element={<About />}></Route>

        <Route path='/ingresar' element={<Login />}></Route>
        <Route path='/registro' element={<Register />}></Route>

        <Route path='dani' element={<Dani />}></Route>

        <Route path='*' element={<Navigate to='/' />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
