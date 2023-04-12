import { type FC } from 'react';

import { questions } from '../assets/Faq/Question';
import DropdownFaq from '../Components/DropdownFaq';
import Layout from '../Components/Layout';

const Help: FC = () => {
  return (
    <Layout title="Ayuda">
      <div className="flex justify-center w-full">
        <div className="lg:w-2/5  mx-1 mt-12">
          <div className="text-center  mb-12">En que podemos ayudarte</div>
          {questions.map((question) => {
            return <DropdownFaq key={question.id} question={question} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Help;
