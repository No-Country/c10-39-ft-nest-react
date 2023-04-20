import { type FC, type PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
interface props {
  title: string;
  bg?: string;
}

const Layout: FC<PropsWithChildren<props>> = ({ children, title, bg }) => {
  return (
    <>
      {localStorage.getItem('token') ? (
        <>
          <header>
            <NavDesktop />
            <NavMobile title={title} />
          </header>
          <div className={`relative bg-bg min-h-[88vh] lg:min-h-[85vh] ${bg ?? ''}`}>
            {children}
          </div>
        </>
      ) : (
        <Navigate to={'/'} />
      )}
    </>
  );
};

export default Layout;
