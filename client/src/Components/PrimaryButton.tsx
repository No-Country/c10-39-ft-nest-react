import { FC } from "react";

type Props = {
  onClick: () => void;
  text: string;
  children?: React.ReactNode;
};

const PrimaryButton: FC<Props> = ({ text, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      className="w-[88px] h-[36px] bg-primary rounded-[20px] text-white"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
