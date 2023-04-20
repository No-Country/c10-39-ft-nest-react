import { type BaseSyntheticEvent, type ChangeEvent, type FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';
import { BsCalendar2Event } from 'react-icons/bs';
import { GiSoccerField } from 'react-icons/gi';
import { MdLocationOn } from 'react-icons/md';
import { TfiTime } from 'react-icons/tfi';
import Swal from 'sweetalert2';

import InputLocation from '../../Components/inputs/InputLocation';
import Select from '../../Components/inputs/Select';
import SelectCalendar from '../../Components/inputs/SelectCalendar';
import SelectHour from '../../Components/inputs/SelectHour';
import Layout from '../../Components/layout/Layout';
import PrimaryButton from '../../Components/PrimaryButton';
import { type appSport } from '../../types/App.type';
import { getSportFieldsWithSport } from '../../Functions/SportFieldsQuery';

const API_KEY = 'AIzaSyB8rVxLxXlomXkjJ04LRtFHC63AtzSnyw0';

export const Search: FC = () => {
  const navigate = useNavigate();
  const { sport = '' } = useParams();
  const sportInfo = useSelector((state: appSport) => state.sport.sport);

  const sportNames = sportInfo?.map((item) => item.name);
  const sportFields = sportInfo?.find((item) => item.name === sport);

  const [location, setLocation] = useState<string>('');
  const [field, setField] = useState('');
  const [turn, setTurn] = useState('');
  const [time, setTime] = useState('');

  const [loader, setLoader] = useState(false);

  const handleField = (option: string) => setField(option);
  const handleTurn = (option: string) => {
    setTurn(option);
  };
  const handleTime = (option: string) => setTime(option);
  const handleLocationName = (string: string) => {
    setLocation(string);
  };

  const handleSearch = async () => {
    if (location) {
      try {
        const { data } = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${API_KEY}`,
        );
        if (!data.results[0]) {
          toast.error('Por favor complete la ubicacion con mas informacion')
          // throw new Error('Por favor complete la ubicacion con mas informacion');
        }
        const { lat, lng }: { lat: number; lng: number } = data.results[0].geometry?.location;

        return { lat, lng };
      } catch (error) {
        console.log(error);
      }
    }
    toast.error('La ubicacion no existe o no esta definida.')
  };

  const handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    handleSearch()
      .then(async (data) => {
        if (data && data.lat && data.lng) {
          const fetchPromise = await getSportFieldsWithSport({
            lat: Number(data.lat),
            lng: Number(data.lng),
            rHour: Number(time),
            date: turn,
            sport,
            fieldType: field,
          })
          const toastId = toast.loading('Buscando...', {
            style: {
              background: '#F5F5F5',
              color: '#4CAF50',
            },
          })
          // toast.loading('Buscando...', {
          //   style: {
          //     background: '#F5F5F5',
          //     color: '#4CAF50',
          //   }
          // })
          if (fetchPromise != undefined && fetchPromise?.length > 0) {
            return setTimeout(() => {
              toast.dismiss(toastId)
              navigate(
                `/reservar/${sport}/canchas?lat=${data.lat}&lng=${data.lng}&rHour=${time}&date=${turn}&fieldType=${field}`,
              )
            }, 2000)
          }

          toast.dismiss(toastId)
          toast.error('No se encontraron canchas.')


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
      {/* TOASTER */}
      <Toaster position="top-center" />
      <div className="w-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center lg:mx-[30%] lg:h-[600px] bg-lightWhite rounded-lg h-[500px] mt-20 lg:my-12 relative"
        >
          <div className="flex flex-col gap-10 w-full items-center mt-10">
            <InputLocation
              label="Ubicacion"
              icon={<MdLocationOn />}
              handleLocationName={handleLocationName}
              location={location}
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
          <div className="absolute bottom-10 right-10">
            <PrimaryButton text="BUSCAR" />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Search;
