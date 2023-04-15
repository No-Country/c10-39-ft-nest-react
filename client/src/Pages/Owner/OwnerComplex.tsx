import { BaseSyntheticEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';
import Input from '../../Components/inputs/Input';
import Layout from '../../Components/layout/Layout';
import PrimaryButton from '../../Components/PrimaryButton';
import {
  CreateComplexQuery,
  GetComplexQuery,
  UpdateComplexQuery,
} from '../../Functions/ComplexQuery';

import { useSelector } from 'react-redux';
import { AppComplex } from '../../types/App.type';
import { MdLocationOn, MdTitle } from 'react-icons/md';
import { BsCalendar2Event } from 'react-icons/bs';
import { Checkbox, ImageUploader } from '../../Components/ui';
import ComplexType from '../../types/Complex.type';
import store from '../../App/Store';
import { setComplex } from '../../App/complexSlice';

const handleAmmeniesChangeFactory =
  (setState: Dispatch<SetStateAction<ComplexType>>, key: keyof ComplexType) => () => {
    setState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

const OwnerComplex = () => {
  const { hasComplex, complex: complexInfo } = useSelector((state: AppComplex) => state.complex);

  const [state, setState] = useState<ComplexType>({
    id: '',
    name: '',
    address: '',
    email: '',
    phone: '',
    grills: false,
    locker: false,
    showers: false,
    restobar: false,
    parking: false,
    availability: [],
  });

  useEffect(() => {
    if (!hasComplex) {
      GetComplexQuery()
        .then((value) => {
          if (value) {
            store.dispatch(setComplex(value));
          }
        })
        .catch((err) => console.log(err));

      return;
    }
    setState(complexInfo);
  }, [hasComplex]);

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
    e.preventDefault();
    const { id, ...data } = state;
    if (id) {
      UpdateComplexQuery(data, id).catch((err) => console.log(err));
      return;
    }

    CreateComplexQuery(data)
      .then((value) => value && store.dispatch(setComplex(value)))
      .catch((err) => console.error(err));
  };

  const handleCancel = () =>
    setState({
      ...complexInfo,
    });

  return (
    <Layout title="Complejo">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        {/* <ImageUploader className={'w-10/12 mb-[12px] mt- h-[225px] lg:h-[400px] lg:w-[800px]'} /> */}
        <div className="w-full mb-5 flex flex-col items-center gap-10 lg:flex-row lg:w-1/2 lg:justify-center lg:h-[500px]">
          <div className="w-full flex flex-col items-center gap-5 mt-10 lg:w-4/6">
            <Input
              type="text"
              label="Nombre del complejo"
              value={state.name}
              name={'name'}
              handleChange={handleChange}
              icon={<MdTitle />}
            />
            <Input
              type="text"
              label="Email"
              value={state.email}
              name={'email'}
              handleChange={handleChange}
            />
            <Input
              type="text"
              label="Telefono"
              value={state.phone}
              name={'phone'}
              handleChange={handleChange}
              icon={<MdLocationOn />}
            />
            <Input
              type="text"
              label="Direccion"
              value={state.address}
              name={'address'}
              handleChange={handleChange}
              icon={<BsCalendar2Event />}
            />
            <Input type="text" label="Turno" value={''} name={'day'} handleChange={handleChange} />
          </div>
          <div className="w-10/12 mt-5 flex flex-col gap-3 text-lg lg:w-2/6 lg:relative lg:top-8">
            <Checkbox
              name={'parking'}
              value={state.parking}
              handleChange={handleAmmeniesChangeFactory(setState, 'parking')}
            >
              Estacionamiento
            </Checkbox>
            <Checkbox
              name={'grills'}
              value={state.grills}
              handleChange={handleAmmeniesChangeFactory(setState, 'grills')}
            >
              Asador
            </Checkbox>
            <Checkbox
              name={'showers'}
              value={state.showers}
              handleChange={handleAmmeniesChangeFactory(setState, 'showers')}
            >
              Vestuario
            </Checkbox>
            <Checkbox
              name={'restobar'}
              value={state.restobar}
              handleChange={handleAmmeniesChangeFactory(setState, 'restobar')}
            >
              Resto-bar
            </Checkbox>
            <Checkbox
              name={'locker'}
              value={state.locker}
              handleChange={handleAmmeniesChangeFactory(setState, 'locker')}
            >
              Lockers
            </Checkbox>
          </div>
        </div>
        <div className="flex w-10/12 justify-between lg:relative lg:w-4/12 lg:m-10">
          <PrimaryButton text="CANCELAR" alternative={true} onClick={handleCancel} />
          <PrimaryButton text={hasComplex ? 'GUARDAR' : 'CREAR'} />
        </div>
      </form>
    </Layout>
  );
};

export default OwnerComplex;
