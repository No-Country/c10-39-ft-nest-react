import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { AiOutlineInfoCircle } from 'react-icons/ai';

import Layout from '../Components/layout/Layout';
import PrimaryButton from '../Components/PrimaryButton';
import { getSportDetail } from '../Functions/SportFieldsQuery';
import { type sportData } from '../types/Sport.type';
import SFDetailMenu from '../Components/SFDetailMenu';

const SFDetail = () => {
  const navigate = useNavigate();
  const { id = '', sport = '' } = useParams();

  const [openMenu, setOpenMenu] = useState(false);

  const [data, setData] = useState<sportData>({
    id: '',
    images: [''],
    name: '',
    description: '',
    sportComplex: {
      ubication: '',
      data: {
        parking: true,
        grill: true,
        changing: true,
        bar: true,
      },
    },
  });

  const handleCancel = () => navigate(`/reservar/${sport}/canchas`);
  const handleConfirm = () => {
    navigate(`/reservar/${sport}/canchas`);
  };

  const handleClick = () => setOpenMenu(!openMenu);

  useEffect(() => {
    getSportDetail(id)
      .then((data) => data && setData(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Layout title="Detalles de la reserva">
      <div className="flex flex-row w-full justify-center gap-20">
        <div className="flex flex-col gap-5 w-full lg:w-[550px] lg:mt-12">
          <div className="mx-[5%] my-5 flex flex-col bg-[#aaa3] px-5 py-2 rounded-lg">
            <span className="opacity-70">{data?.name}</span>
            <span className="text-lg">{data?.sportComplex?.ubication}</span>
          </div>
          <div className="flex flex-col gap-5 bg-white pb-2 mb-10 mx-2 shadow-lg rounded-lg">
            <div className="relative flex flex-row items-center justify-between p-5">
              <span className="text-lg">Informacion del partido</span>
              <button onClick={handleClick} className="text-3xl">
                <AiOutlineInfoCircle />
              </button>
              <SFDetailMenu openMenu={openMenu} />
            </div>
            <div className="bg-[#aaa2] p-5">
              <span className="block">{data?.description}</span>
              <span className="block">Dobles</span>
            </div>
            <div className="bg-[#aaa2] p-5">
              <div className="flex flex-row justify-between w-full">
                <span>Dia</span>
                <span>Miercoles 30/3</span>
              </div>
              <div className="flex flex-row justify-between w-full">
                <span>Hora</span>
                <span>17:00 hs</span>
              </div>
              <div className="flex flex-row justify-between w-full">
                <span>Duracion</span>
                <span>60 minutos</span>
              </div>
            </div>
            <span className="p-5">
              Importante: Este complejo no exigio una carga monetaria como garantia. Se solicita en
              caso de cancelar la reserva, hacerlo con 24 horas de antelacion.
            </span>
          </div>
          <div className="flex flex-row justify-evenly w-full lg:hidden">
            <PrimaryButton text="CANCELAR" onClick={handleCancel} alternative={true} />
            <PrimaryButton text="RESERVAR" onClick={handleConfirm} />
          </div>
        </div>

        <div className="hidden lg:flex gap-5 flex-col">
          <div className="w-[700px] h-[475px] bg-primary mt-16"></div>
          <div className="flex flex-row justify-evenly w-full ">
            <PrimaryButton text="CANCELAR" onClick={handleCancel} alternative={true} />
            <PrimaryButton text="RESERVAR" onClick={handleConfirm} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SFDetail;
