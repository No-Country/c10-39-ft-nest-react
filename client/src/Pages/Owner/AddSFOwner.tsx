import { type FC, useState, type BaseSyntheticEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';

import { GiSoccerField } from 'react-icons/gi';
import { GrGroup } from 'react-icons/gr';
import { MdTitle } from 'react-icons/md';

import Input from '../../Components/inputs/Input';
import Select from '../../Components/inputs/Select';
import Layout from '../../Components/layout/Layout';
import PrimaryButton from '../../Components/PrimaryButton';
import { OwnerAddSFQuery, OwnerEditSFQuery } from '../../Functions/OwnerQuery';
import { appSport, AppUser } from '../../types/App.type';
import { useNavigate, useParams } from 'react-router-dom';
import { getSportDetail } from '../../Functions/SportFieldsQuery';
import { ISportField, ISportFieldRespones } from '../../types/SportField.type';


interface Props {
  edit?: boolean;
}

const AddSFOwner: FC<Props> = ({ edit = false }) => {
  const navigate = useNavigate();
  const sportInfo = useSelector((state: appSport) => state.sport.sport);
  const { id = '' } = useParams();

  const [state, setState] = useState({
    name: '',
    fieldType: '',
    sport: '',
    dimensions: '',
    capacity: '',
  });

  useEffect(() => {
    if (edit) {
      getSportDetail(id)
        .then((sportField) => {
          if (!sportField) {
            toast.error('No Encontramos la cancha')
            console.log('Not found');
            return;
          }
          const { name, fieldType, sport, dimensions, capacity } = sportField;
          setState({ name, fieldType, sport: sport.name, dimensions, capacity: `${capacity}` });
        })
        .catch(console.error);
    }
  }, []);

  const sportNames = sportInfo?.map((item) => item.name);
  const sportFields = sportInfo?.find((item) => item.name === state.sport);

  const handleChange = (event: BaseSyntheticEvent) => {
    setState((prev) => {
      const target = event.target;
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };

  const handleSubmit = (e: BaseSyntheticEvent) => {
    const body = { ...state, capacity: parseInt(state.capacity) };
    e.preventDefault();
    if (edit) {
      OwnerEditSFQuery(body, id)
        .then((data) => {
          const datos = { ...data } as ISportFieldRespones;
          if (datos.id && datos.name && datos.fieldType && datos.sport) {
            toast.success(`${datos.name}, se actualizo correctamente.`, {
              style: {
                background: "#F5F5F5",
                color: '#4CAF50'
              }
            })
            return setTimeout(() => navigate('/propietarios'), 2000)
          };
          Swal.fire({
            title: 'Error!',
            text: 'No se ha podido registrar.',
            footer: '<b>Tip:</b> &nbsp Recuerde todos los campos son obligatorios.',
            icon: 'error',
            //Confirm Button
            showConfirmButton: true,
            confirmButtonText: 'Volver a Propietarios',
            confirmButtonColor: '#4CAF50',
            //Cancel Button
            showCancelButton: true,
            cancelButtonText: "Intentar otra vez",
          }).then(response => {
            if (response.isConfirmed) return navigate('/propietarios')
          })
        })

        .catch((err) => console.log(err));
      return;
    }

    OwnerAddSFQuery(body)
      .then((data) => {
        const datos = { ...data } as ISportFieldRespones;
        if (datos.id && datos.name && datos.fieldType && datos.sport) {
          toast.success(`${datos.name}, se registro correctamente.`, {
            style: {
              background: "#F5F5F5",
              color: '#4CAF50'
            }
          })
          return setTimeout(() => navigate('/propietarios'), 2000)
        };
        Swal.fire({
          title: 'Error!',
          text: 'No se ha podido registrar.',
          footer: '<b>Tip:</b> &nbsp Recuerde todos los campos son obligatorios.',
          icon: 'error',
          showConfirmButton: false,
          cancelButtonText: "Intentar otra vez",
          showCancelButton: true,
          cancelButtonColor: '#4CAF50',
        })
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout title='Agregar cancha'>
      <Toaster
        position='top-center'
      />
      <form onSubmit={handleSubmit} className='relative min-h-[100vh] flex flex-col items-center'>
        <div className='bg-[#D9D9D9] rounded-lg w-10/12 cursor-pointer my-[70px] relative h-[225px] lg:h-[400px] lg:w-[800px] text-center '>
          +
        </div>
        <div className='flex flex-col w-full items-center gap-10 lg:w-[700px]'>
          <Input
            type='text'
            label='Nombre'
            icon={<MdTitle />}
            handleChange={handleChange}
            value={state.name}
            name={'name'}
          />
          <Select
            array={sportNames}
            label='Deporte'
            value={state.sport}
            handleClick={(option) => setState((prev) => ({ ...prev, sport: option }))}
            icon={<GiSoccerField />}
            anyOption={false}
          />
          <Select
            array={sportFields?.types ?? []}
            label='Tipo de Cancha'
            value={state.fieldType}
            handleClick={(option) => setState((prev) => ({ ...prev, fieldType: option }))}
            anyOption={false}
            icon={<GiSoccerField />}
          />
          <Input
            type='text'
            label='Dimensiones'
            icon={<GrGroup />}
            value={state.dimensions}
            handleChange={handleChange}
            name={'dimensions'}
          />
          <Input
            type='number'
            label='Capacidad'
            icon={<GrGroup />}
            value={state.capacity}
            handleChange={handleChange}
            name={'capacity'}
          />
        </div>
        <div className='flex justify-end w-full px-20'>
          <PrimaryButton text={edit ? 'GUARDAR' : 'CREAR'} />
        </div>
      </form>
    </Layout>
  );
};

export default AddSFOwner;
