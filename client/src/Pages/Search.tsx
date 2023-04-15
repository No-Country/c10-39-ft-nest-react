import { type BaseSyntheticEvent, type FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { BsCalendar2Event } from 'react-icons/bs';
import { GiSoccerField } from 'react-icons/gi';
import { MdLocationOn } from 'react-icons/md';
import { TfiTime } from 'react-icons/tfi';

import Input from '../Components/Input';
import Layout from '../Components/Layout';
import { LocationInput } from '../Components/LocationInput';
import PrimaryButton from '../Components/PrimaryButton';
import Select from '../Components/Select';
import SelectCalendar from '../Components/SelectCalendar';
import SelectHour from '../Components/SelectHour';
import { type appSport } from '../types/App.type';

export const Search: FC = () => {
  const navigate = useNavigate();
  const { sport = '' } = useParams();
  const sportInfo = useSelector((state: appSport) => state.sport.sport);

  const sportNames = sportInfo?.map((item) => item.name);
  const sportFields = sportInfo?.find((item) => item.name === sport);

  const [ubication, setUbication] = useState('');
  const [field, setField] = useState('');
  const [turn, setTurn] = useState('');
  const [time, setTime] = useState('');

  const [loader, setLoader] = useState(false);

  const handleUbication = (event: BaseSyntheticEvent) => setUbication(event.target.value);
  const handleField = (option: string) => setField(option);
  const handleTurn = (option: string) => setTurn(option);
  const handleTime = (option: string) => setTime(option);

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    navigate(
      `/reservar/${sport}/canchas?lat=${43}&lng=${43}&rHour=${time}&date=${turn}&fieldType=${field}`,
    );
  };

  useEffect(() => {
    if (sport && sportNames && sportNames.includes(sport)) {
      setLoader(true);
    } else if (sport && sportNames) {
      navigate('/reservar');
    }
  }, [navigate, sport, sportNames]);

  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const handleLocationChange = (latitude: any, longitude: any) => {
    setLatitude(latitude);
    setLongitude(longitude);
  };
  console.log(latitude, longitude);

  return (
    <Layout title={`${loader ? sport : ''}`}>
      <div className="w-full flex justify-center items-center h-[70vh]">
        <form onSubmit={handleSubmit} className="flex w-full flex-col items-center lg:mx-[30%]">
          <div className="flex flex-col gap-5 w-full items-center pt-12 lg:gap-10">
            <LocationInput onLocationChange={handleLocationChange} />
            <Input
              type="text"
              label="Ubicacion"
              handleChange={handleUbication}
              name="ubication"
              value={ubication}
              icon={<MdLocationOn />}
            />
            {sportFields?.types && (
              <Select
                array={sportFields?.types}
                label="Tipo de Cancha"
                value={field}
                handleClick={handleField}
                icon={<GiSoccerField />}
              />
            )}
            <SelectCalendar
              label="Dia"
              value={turn}
              handleClick={handleTurn}
              icon={<BsCalendar2Event />}
            />
            <SelectHour label="Horario" value={time} handleClick={handleTime} icon={<TfiTime />} />
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
