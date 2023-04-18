import { type FC } from 'react';

import Layout from '../../Components/layout/Layout';
import TurnsCard from '../../Components/TurnsCard';

const Turns: FC = () => {
  return (
    <Layout title="Turnos">
      <div className="flex justify-center lg:py-12 pt-0 w-full">
        <div className="lg:w-2/5  mx-1 mt-12">
          <div className="text-center font-semibold mb-12">Turnos reservados</div>
          <TurnsCard question="todo " />;
        </div>
      </div>
    </Layout>
  );
};

export default Turns;
