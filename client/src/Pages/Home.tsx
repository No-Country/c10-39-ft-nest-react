import Card from '../Components/Card';
import Layout from '../Components/Layout';

const Home = () => {
  return (
    <Layout title="Home">
      <div className="w-full h-full overflow-scroll fixed bg-tenis bg-cover bg-[45%] pt-[50px] pb-[70px]">
        <Card route="/reservas" title="Reservas" />
        <Card route="/propietarios" title="Propietarios" />
      </div>
    </Layout>
  );
};

export default Home;
