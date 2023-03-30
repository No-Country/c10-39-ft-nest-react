import Layout from "../Components/Layout";
import Card from "../Components/Card";
const Home = () => {
  return (
    <Layout title="Home">
      <Card title="Reservas">
        <div className="h-[185px] bg-cover w-full bg-[url('https://www.rere.jp/beginners/uploads/2019/09/i-471621500-3-1024x667.jpg')]"></div>
      </Card>
      <Card title="Propietarios"></Card>
    </Layout>
  );
};

export default Home;
