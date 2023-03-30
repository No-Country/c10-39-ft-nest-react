import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import Register from "./Pages/Register";
import MainPage from "./Pages/MainPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Search from "./Pages/Search";
import SportFields from "./Pages/SportFields";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/home" element={<Home />}></Route>

          <Route path="/reservas/:sport" element={<Search />}></Route>
          <Route path="/reservas/:sport/canchas" element={<SportFields />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
