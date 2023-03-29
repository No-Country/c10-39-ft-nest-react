import { FC } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

type props = {
  children: React.ReactNode;
  title: string;
};

const Layout: FC<props> = ({ children, title }) => {
  return (
    <div>
      <header className="bg-primary flex justify-center shadow-lg fixed w-full h-[80px]">
        <div className=" gap-7 justify-left flex w-full ml-5 items-center ">
          <div className="text-white align-middle">
            <GiHamburgerMenu />
          </div>
          <h1 className="text-white text-xl w-10/12 pb-5 pt-10 text-left font-semibold">
            {title}
          </h1>
        </div>
      </header>
      <div className="pt-[80px]"></div>
      {children}
    </div>
  );
};

export default Layout;
