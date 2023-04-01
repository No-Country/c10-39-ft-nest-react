import Layout from "../Components/Layout";
import SportCard from "../Components/SportCard";
const Reservation = () => {
  return (
    <Layout title="Deportes">
      <SportCard
        backgroundImage="https://www.rere.jp/beginners/uploads/2019/09/i-471621500-3-1024x667.jpg"
        title="Tenis"
      ></SportCard>
      <SportCard
        backgroundImage="https://www.rere.jp/beginners/uploads/2019/09/i-471621500-3-1024x667.jpg"
        title="Futbol"
      ></SportCard>
    </Layout>
  );
};

export default Reservation;
