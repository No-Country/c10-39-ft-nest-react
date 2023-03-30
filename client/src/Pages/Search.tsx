import { BaseSyntheticEvent, FC, useState, useEffect } from "react";
import Input from "../Components/Input";
import Layout from "../Components/Layout";

import { MdLocationOn } from "react-icons/md";
import { GiSoccerField } from "react-icons/gi";
import { BsCalendar2Event } from "react-icons/bs";
import { TfiTime } from "react-icons/tfi";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import Select from "../Components/Select";
import PrimaryButton from "../Components/PrimaryButton";

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
    tenis: ["Polvo y Ladrillo", "Cesped", "Sintetica"],
    futbol: ["Piso madera", "Cesped", "sintetica"],
  };
  const sports = ["tenis", "futbol"];

  const navigate = useNavigate();

  useEffect(() => {
    if (sport && sports.includes(sport)) {
      const keySport = sport as fieldSportKeyType;
      setFieldSportList(fieldSportLists[keySport]);
    } else {
      navigate("/");
    }
  }, []);

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    // axios
    //   .post("http://localhost:3000", {
    //     ubication,
    //     fieldSport,
    //     date,
    //     timeTable,
    //   })
    //   .then((res) => console.log(res))
    //   .then((res) => navigate(`/reservas/${sport}/canchas`))
    //   .catch((error) => console.log(error));
    navigate(`/reservas/${sport}/canchas`);
  };

  return (
    <Layout title={`${sport}`}>
      <form onSubmit={handleSubmit} className="flex w-full flex-col items-center">
        <div className="flex flex-col gap-5 w-full items-center pt-12">
          <Input
            type="text"
            label="Ubicacion"
            state={ubication}
            setState={setUbication}
            icon={<MdLocationOn />}
          />
          <Select
            array={fieldSportList}
            type={"sportField"}
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
        <div className="absolute bottom-10 right-10">
          <PrimaryButton text="BUSCAR" />
        </div>
      </form>
    </Layout>
  );
};

export default Search;
