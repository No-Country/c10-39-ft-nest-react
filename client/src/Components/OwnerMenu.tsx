import { type FC } from 'react';

import { useSelector } from 'react-redux';
import { AppComplex } from '../types/App.type';

import Card from './cards/Card';
import OwnerCard from './cards/OwnerCard';

export const OwnerMenu: FC = () => {
  const hasComplex = useSelector((state: AppComplex) => state.complex?.hasComplex);

  console.log(hasComplex);

  return (
    <div className="w-full pb-12 h-full  fixed bg-tenis-desktop bg-cover bg-[30%] ">
      <div className="overflow-y-scroll flex flex-col pb-12 gap-16 mx-1 h-full pt-24 relative lg:flex-row lg:mx-20 lg:pt-0 lg:items-center lg:bottom-20 lg:justify-between lg:overflow-y-hidden">
        <OwnerCard exists={hasComplex} />
        {hasComplex && (
          <>
            <Card route="/propietarios/canchas" title="Mis canchas" />
            <Card route="/propietarios/agregar-cancha" title="Agregar cancha" />
          </>
        )}
      </div>
    </div>
  );
};
