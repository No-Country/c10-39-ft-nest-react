import Card from '../Components/cards/Card';
import Layout from '../Components/layout/Layout';

const Home = () => {
  return (
    <Layout title='Home' bg='bg-tenis bg-cover bg-[45%]'>
      <div className='absolute top-[15%] w-full px-3 lg:top-1/4'>
        <div className='flex flex-col w-full h-full gap-20 lg:flex-row lg:justify-center'>
          <Card route='/reservar' title='Reservar' />
          <Card route='/propietarios' title='Propietarios' />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
