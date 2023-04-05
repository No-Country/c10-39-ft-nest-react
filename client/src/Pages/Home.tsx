import Layout from "../Components/Layout";
import Card from "../Components/Card";
const Home = () => {
  return (
    <Layout title="Home">
      <div className="w-full h-full bg-tenis bg-cover bg-[45%] pt-[160px]">
        <Card title="Reservas" />
        <Card title="Propietarios" />
      </div>
    </Layout>
  );
};

export default Home;
