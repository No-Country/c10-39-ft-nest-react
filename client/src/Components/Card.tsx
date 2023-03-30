import { FC } from "react";
import PrimaryButton from "./PrimaryButton";

type props = {
  children?: React.ReactNode;
  title: string;
};

const Card: FC<props> = ({ children, title }) => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className="mt-3">
      {children}
      <div className=" relative bg-primary w-full h-[200px]">
        <h1 className=" absolute bottom-4 left-4 text-white text-xl w-10/12 text-left font-semibold">
          {title}
        </h1>
      </div>
      <div className=" relative w-full h-[48px] shadow-lg bottom-0 bg-white">
        <div className="absolute bottom-1 right-1">
          <PrimaryButton text="IR" onClick={handleClick}></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
