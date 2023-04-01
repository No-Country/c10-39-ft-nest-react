import { FC } from "react";

type Props = {
  text: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

const PrimaryButton: FC<Props> = ({ text, onClick }) => {
  const handleClick = () => onClick && onClick();

  return (
    <button
      className="font-roboto px-5 font-semibold tracking-widest text-center text-[10px] p-1 shadow-lg min-w-[88px] h-[36px] bg-primary rounded-[20px] text-white"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
