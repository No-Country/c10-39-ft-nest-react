import { type BaseSyntheticEvent, type FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';
import { BsCalendar2Event } from 'react-icons/bs';
import { GiSoccerField } from 'react-icons/gi';
import { MdLocationOn } from 'react-icons/md';
import { TfiTime } from 'react-icons/tfi';

import InputLocation from '../../Components/inputs/InputLocation';
import Select from '../../Components/inputs/Select';
import SelectCalendar from '../../Components/inputs/SelectCalendar';
import SelectHour from '../../Components/inputs/SelectHour';
import Layout from '../../Components/layout/Layout';
import PrimaryButton from '../../Components/PrimaryButton';
import { type appSport } from '../../types/App.type';
import { inputData, validationInputs } from '../../utils/validationInputs';

const API_KEY = 'AIzaSyB8rVxLxXlomXkjJ04LRtFHC63AtzSnyw0';

export const Search: FC = () => {
  const navigate = useNavigate();
  const { sport = '' } = useParams();
  const sportInfo = useSelector((state: appSport) => state.sport.sport);

  const sportData = sportInfo?.find((item) => item.name === sport);

  const sportNames = sportInfo?.map((item) => item.name);
  const sportFields = sportInfo?.find((item) => item.name === sport);

  const defaultState = { value: '', validation: true, select: true };
  const [location, setLocation] = useState<inputData>(defaultState);
  const [field, setField] = useState<inputData>(defaultState);
  const [turn, setTurn] = useState<inputData>(defaultState);
  const [time, setTime] = useState<inputData>(defaultState);

  const [loader, setLoader] = useState(false);

  const modifyState = (option: string) => ({ value: option, validation: true, select: true });
  const handleTurn = (option: string) => setTurn(modifyState(option));
  const handleField = (option: string) => setField(modifyState(option));
  const handleTime = (option: string) => setTime(modifyState(option));
  const handleLocationName = (option: string) => setLocation(modifyState(option));

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location.value}&key=${API_KEY}`,
      );
      if (!data.results[0]) {
        throw new Error('Por favor complete la ubicacion con mas informacion');
      }
      const { lat, lng }: { lat: number; lng: number } = data.results[0].geometry?.location;

      return { lat, lng };
    } catch (error) {
      alert(error);
    }
  };

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const { newState, pass } = validationInputs({ location, field, turn, time }, 5);

    setLocation(newState.location);
    setField(newState.field);
    setTurn(newState.turn);
    setTime(newState.time);
    if (!pass) return;

    handleSearch()
      .then((data) => {
        if (data && data.lat && data.lng) {
          navigate(
            `/reservar/${sport}/canchas?lat=${data.lat}&lng=${data.lng}&rHour=${time.value}&date=${turn.value}&fieldType=${field.value}`,
          );
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (sport && sportNames && sportNames.includes(sport)) {
      setLoader(true);
    } else if (sport && sportNames) {
      navigate('/reservar');
    }
  }, [navigate, sport, sportNames]);

  return (
    <Layout title={`${loader ? sport : ''}`}>
      <div className="w-full flex justify-center items-center">
        <img src={sportData?.image} className="hidden lg:block fixed top-0 left-0 right-0 w-full" />
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center lg:mx-[30%] lg:h-[600px] backdrop-blur-sm bg-lightWhite rounded-lg h-[500px] mt-20 lg:my-12 relative"
        >
          <div className="flex flex-col gap-10 w-full items-center mt-10">
            <InputLocation
              label="Ubicacion"
              icon={<MdLocationOn />}
              handleLocationName={handleLocationName}
              value={location.value}
              validation={location.validation}
            />
            {sportFields?.types && (
              <Select
                array={sportFields?.types}
                label="Tipo de Cancha"
                value={field.value}
                handleClick={handleField}
                icon={<GiSoccerField />}
                validation={field.validation}
              />
            )}
            <SelectCalendar
              label="Dia"
              value={turn.value}
              handleClick={handleTurn}
              icon={<BsCalendar2Event />}
              validation={turn.validation}
            />
            <SelectHour
              label="Horario"
              value={time.value}
              handleClick={handleTime}
              icon={<TfiTime />}
              validation={time.validation}
            />
          </div>
          <div className="absolute bottom-10 right-10">
            <PrimaryButton text="BUSCAR" />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Search;
