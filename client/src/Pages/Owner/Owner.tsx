import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { setComplex } from '../../App/complexSlice';
import store from '../../App/Store';
import Layout from '../../Components/layout/Layout';
import { OwnerMenu } from '../../Components/OwnerMenu';
import { GetComplexQuery } from '../../Functions/ComplexQuery';

import OwnerRegister from './OwnerRegister';

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
