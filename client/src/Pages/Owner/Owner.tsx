import { useSelector } from 'react-redux';

import Layout from '../../Components/layout/Layout';

import OwnerRegister from './OwnerRegister';
import { OwnerMenu } from '../../Components/OwnerMenu';
import { useEffect } from 'react';
import { GetComplexQuery } from '../../Functions/ComplexQuery';
import store from '../../App/Store';
import { setComplex } from '../../App/complexSlice';

const Owner = () => {
  const isOwner = useSelector<any>((state) => state.user?.user?.owner);
  useEffect(() => {
    GetComplexQuery()
      .then((value) => value && store.dispatch(setComplex(value)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {isOwner ? (
        <>
          <Layout title="Popietarios">
            <OwnerMenu />
          </Layout>
        </>
      ) : (
        <OwnerRegister />
      )}
    </>
  );
};

export default Owner;
