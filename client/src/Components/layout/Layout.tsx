import { type FC, type PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
interface props {
  title: string;
}

const Layout: FC<PropsWithChildren<props>> = ({ children, title }) => {
  return (
    <>
      {localStorage.getItem('token') ? (
        <>
          <header>
            <NavDesktop />
            <NavMobile title={title} />
          </header>
          <div className='z-10 bg-bg max-h-screen overflow-y-scroll'>
            <div>{children}</div>
          </div>
        </>
      ) : (
        <Navigate to={'/'} />
      )}
    </>
  );
};

export default Layout;
