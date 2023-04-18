import { type FC, useState } from 'react';

import { MdKeyboardArrowLeft } from 'react-icons/md';

interface QuestionType {
  question: {
    id: number;
    question: string;
    answer: string;
  };
}

const TurnsCard: FC<QuestionType> = ({ question }) => {
  const [openQuestion, setOpenQuestion] = useState(false);
  const handleClick = () => setOpenQuestion(!openQuestion);

  return (
    <div key={question.id} className=" bg-grey relative p-5 shadow-md ">
      <button
        onClick={handleClick}
        className={`ml-12 text-xl transition-transform ${
          openQuestion ? 'rotate-90' : '-rotate-90'
        } absolute right-6`}
      >
        <MdKeyboardArrowLeft />
      </button>
      <div className="text-center text-[#6C6C6C]">Todo pelota</div>
      <div>Todo pelota</div>

      <div className={`${openQuestion ? 'h-auto ' : 'h-0'} mt-3 overflow-hidden`}>
        <div className=" bg-white w-full"> Nombre: Joaquin</div>
        <div className=" bg-white"> Nombre: Joaquin</div>
      </div>
    </div>
  );
};

export default TurnsCard;
