import { FC } from "react";
import PrimaryButton from "./PrimaryButton";

type props = {
  children?: React.ReactNode;
  title: string;
  backgroundImage: string;
};

const SportCard: FC<props> = ({ children, title, backgroundImage }) => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div
      className={`mt-3 bg-cover mb-10 relative h-[200px] bg-[url('${backgroundImage}')] w-full h-[220px] flex items-center justify-center`}
    >
      <div className="font-segoeScript font-bold text-6xl text-center">
        {title}
      </div>
      <div className="absolute bottom-4 right-4">
        <PrimaryButton text="IR" onClick={handleClick}></PrimaryButton>
      </div>
    </div>
  );
};

export default SportCard;
