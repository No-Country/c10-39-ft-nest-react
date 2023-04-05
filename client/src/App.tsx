import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import MainPage from "./Pages/MainPage";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Reservation from "./Pages/Reservation";
import SportFields from "./Pages/SportFields";
import SFDetail from "./Pages/SFDetial";

import { useEffect } from "react";
import { authUser } from "./Functions/userPetition";

function App() {
  useEffect(() => {
    localStorage.getItem("tkn") && authUser();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/home" element={<Home />}></Route>

        <Route path="/reservas/:sport" element={<Search />}></Route>
        <Route path="/reservas" element={<Reservation />}></Route>
        <Route path="/reservas/:sport/canchas" element={<SportFields />}></Route>
        <Route path="/reservas/:sport/canchas/id" element={<SFDetail />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
