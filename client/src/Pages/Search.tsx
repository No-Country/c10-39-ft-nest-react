import { FC, useState, useEffect } from "react";
import Input from "../Components/Input";
import Layout from "../Components/Layout";

import { MdLocationOn } from "react-icons/md";
import { GiSoccerField } from "react-icons/gi";
import { BsCalendar2Event } from "react-icons/bs";
import { TfiTime } from "react-icons/tfi";
import { useNavigate, useParams } from "react-router-dom";

type fieldSportType = {
  tenis: Array<string>;
  futbol: Array<string>;
};
type fieldSportKeyType = keyof fieldSportType;

export const Search: FC = () => {
  const [ubication, setUbication] = useState("");
  const [fieldSport, setFieldSport] = useState("");
  const [date, setDate] = useState("");
  const [timeTable, setTimeTable] = useState("");

  const [fieldSportList, setFieldSportList] = useState([""]);

  const { sport } = useParams();

  const fieldSportLists: fieldSportType = {
    tenis: ["Polvo y Ladrillo, Cesped, Sintetica"],
    futbol: ["Piso madera, Cesped, sintetica"],
  };
  const sports = ["tenis", "futbol"];

  const navigate = useNavigate();

  useEffect(() => {
    if (sport && sports.includes(sport)) {
      (sport: fieldSportKeyType) => setFieldSportList(fieldSportLists[sport]);
    } else {
      navigate("/");
    }
  }, [sport]);

  return (
    <Layout title={`${sport}`}>
      <div className="flex flex-col gap-5 w-full items-center py-10">
        <Input
          type="text"
          label="Ubicacion"
          state={ubication}
          setState={setUbication}
          icon={<MdLocationOn />}
        />
        <Input
          type="text"
          label="Tipo de Cancha"
          state={fieldSport}
          setState={setFieldSport}
          icon={<GiSoccerField />}
        />
        <Input
          type="text"
          label="Turno"
          state={date}
          setState={setDate}
          icon={<BsCalendar2Event />}
        />
        <Input
          type="text"
          label="Horario"
          state={timeTable}
          setState={setTimeTable}
          icon={<TfiTime />}
        />
      </div>
      <button>Buscar</button>
    </Layout>
  );
};

export default Search;
