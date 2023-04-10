import { type BaseSyntheticEvent, type FC, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { BsCalendar2Event } from 'react-icons/bs';
import { GiSoccerField } from 'react-icons/gi';
import { MdLocationOn } from 'react-icons/md';
import { TfiTime } from 'react-icons/tfi';

import Input from '../Components/Input';
import Layout from '../Components/Layout';
import PrimaryButton from '../Components/PrimaryButton';
import Select from '../Components/Select';

interface fieldSportType {
  tenis: string[];
  futbol: string[];
}
type fieldSportKeyType = keyof fieldSportType;

export const Search: FC = () => {
  const [state, setState] = useState({
    ubication: '',
    turn: '',
    field: '',
    time: '',
  });

  const handleChange = (event: BaseSyntheticEvent) => {
    setState((prev) => {
      const target = event.target;
      return {
        ...prev,
        [target.name]: target.value,
      };
    });

    console.log(state);
  };

  const [fieldSportList, setFieldSportList] = useState(['']);

  const { sport = '' } = useParams();

  const fieldSportLists: fieldSportType = {
    tenis: ['Polvo y Ladrillo', 'Cesped', 'Sintetica'],
    futbol: ['Piso madera', 'Cesped', 'sintetica'],
  };
  const sports = ['tenis', 'futbol'];

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (sport && sports.includes(sport)) {
  //     const keySport = sport as fieldSportKeyType;
  //     setFieldSportList(fieldSportLists[keySport]);
  //   } else {
  //     navigate('/');
  //   }
  // }, []);

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
    //   .then((res) => navigate(`/reservar/${sport}/canchas`))
    //   .catch((error) => console.log(error));
    navigate(`/reservar/${sport}/canchas`);
  };

  return (
    <Layout title={`${sport}`}>
      <div className="w-full flex justify-center items-center h-[70vh]">
        <form onSubmit={handleSubmit} className="flex w-full flex-col items-center lg:mx-[30%]">
          <div className="flex flex-col gap-5 w-full items-center pt-12 lg:gap-10">
            <Input
              type="text"
              label="Ubicacion"
              handleChange={handleChange}
              name="ubication"
              value={state.ubication}
              icon={<MdLocationOn />}
            />
            <Select
              array={fieldSportList}
              type={'sportField'}
              label="Tipo de Cancha"
              value={state.field}
              handleChange={handleChange}
              name="field"
              icon={<GiSoccerField />}
            />
            <Input
              type="text"
              label="Turno"
              handleChange={handleChange}
              name="turn"
              value={state.turn}
              icon={<BsCalendar2Event />}
            />
            <Input
              type="text"
              label="Horario"
              handleChange={handleChange}
              name="time"
              value={state.time}
              icon={<TfiTime />}
            />
          </div>
          <div className="absolute bottom-10 right-10 lg:right-[33%]">
            <PrimaryButton text="BUSCAR" />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Search;
