import { type FC, useState } from 'react';

import { MdClose, MdEdit } from 'react-icons/md';
import { GetReservationType } from '../../types/Reservation.type';
import PrimaryButton from '../PrimaryButton';
import { DeleteReservation } from '../../Functions/ReservationsQuery';

interface Props {
  reservation: GetReservationType;
  deleteReservations: (deletedId: string) => boolean;
}

const ReservationCard: FC<Props> = ({ reservation, deleteReservations }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => setOpen(!open);
  const handleCancel = () => {
    const id = reservation.reservation.id;
    console.log(id);
    DeleteReservation(id)
      .then(({ id }) => {
        if (deleteReservations(id)) throw new Error('No se pudo cancelar la reserva');
      })
      .then(() => alert('Reserva cancelada exitosamente!'))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col w-full bg-secondary px-5 py-2">
      <span className="opacity-70">{reservation?.name}</span>
      <div className="flex flex-row w-full justify-between items-center">
        <span className="text-lg">{reservation?.sportsComplex?.address}</span>
        <div className="flex flex-row gap-5 text-2xl">
          <button onClick={handleClick}>
            <MdEdit />
          </button>
          {open && (
            <>
              <span className="backdrop-blur-sm w-full h-full absolute top-2 left-0 z-[200]"></span>
              <div className="absolute left-0 w-full h-full top-16 text-xl  flex z-[300] justify-center items-center">
                <div className="w-full bg-white shadow-lg h-auto rounded-lg lg:w-[600px]">
                  <span
                    onClick={handleClick}
                    className="cursor-pointer text-2xl flex justify-end mr-2 mt-2"
                  >
                    <MdClose />
                  </span>
                  <div className="mx-[5%] my-5 flex flex-col bg-[#aaa3] px-5 py-2 rounded-lg">
                    <span className="opacity-70">{reservation?.name}</span>
                    <span className="text-lg">{reservation?.sportsComplex?.address}</span>
                  </div>
                  <div className="flex flex-col gap-5 pb-2 mb-2 mx-2">
                    <div className="relative flex flex-row items-center justify-between p-2">
                      <span className="text-lg">Informacion del partido</span>
                    </div>
                    <div className="bg-[#aaa2] p-2">
                      <span className="block">{reservation?.description}</span>
                      <span className="block">
                        Capacidad: {reservation?.capacity} personas - {reservation?.dimensions} m²
                      </span>
                    </div>
                    <div className="bg-[#aaa2] p-2">
                      <div className="flex flex-row justify-between w-full">
                        <span>Dia</span>
                        <span>Miercoles {reservation.reservation.data}</span>
                      </div>
                      <div className="flex flex-row justify-between w-full">
                        <span>Hora</span>
                        <span>{reservation.reservation.hour}:00 hs</span>
                      </div>
                      <div className="flex flex-row justify-between w-full">
                        <span>Duracion</span>
                        <span>60 minutos</span>
                      </div>
                    </div>
                    <span className="p-2">
                      Importante: Este complejo no exigio una carga monetaria como garantia. Se
                      solicita en caso de cancelar la reserva, hacerlo con 24 horas de antelacion.
                    </span>
                    <div className="flex justify-center">
                      <PrimaryButton text="CANCELAR" alternative={true} onClick={handleCancel} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
