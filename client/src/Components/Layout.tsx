import { FC } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import { GoKebabVertical } from "react-icons/go";
import { AiOutlineSearch } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";

type props = {
  children: React.ReactNode;
  title: string;
};

const Layout: FC<props> = ({ children, title }) => {
  return (
    <div>
      <header className="z-[300] bg-primary flex justify-center shadow-lg fixed w-full h-[80px]">
        <div className=" gap-7 justify-start flex w-full ml-5 items-center pb-5 pt-10 ">
          <button className="text-white align-middle">
            <GiHamburgerMenu />
          </button>
          <h1 className="text-white text-xl w-10/12 text-left font-semibold">
            {title}
          </h1>
        </div>
        <div className=" gap-7 justify-end flex w-full mr-5 items-center pb-5 pt-10 ">
          <button className="text-white align-middle">
            <TiArrowSortedDown />
          </button>
          <div className="text-white text-xl">
            <GoKebabVertical></GoKebabVertical>
          </div>
        </div>
      </header>
      <div className="z-10  pt-[80px] bg-secondary h-screen">{children}</div>
    </div>
  );
};

export default Layout;
