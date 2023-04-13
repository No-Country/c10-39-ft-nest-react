import { useSelector } from 'react-redux';

import Card from '../Components/Card';
import Layout from '../Components/Layout';

import OwnerRegister from './OwnerRegister';

const Owner = () => {
  const isOwner = useSelector<any>((state) => state.user?.user?.owner);
  return (
    <>
      {isOwner ? (
        <>
          <Layout title="Popietarios">
            <div className="w-full pb-12 h-full  fixed bg-tenis-desktop bg-cover bg-[30%] ">
              <div className="overflow-y-scroll flex flex-col pb-12 gap-16 mx-1 h-full pt-24 relative lg:flex-row lg:mx-20 lg:pt-0 lg:items-center lg:bottom-20 lg:justify-between">
                {' '}
                <Card route="/propietarios/canchas" title="Mis canchas" />
                <Card route="/propietarios/agregar-cancha" title="Agregar cancha" />
                <Card route="/propietarios/complejo" title="Mi Complejo" />
              </div>
            </div>
          </Layout>
        </>
      ) : (
        <OwnerRegister />
      )}
    </>
  );
};

export default Owner;
