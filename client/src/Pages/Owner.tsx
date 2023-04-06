import Card from '../Components/Card';
import Layout from '../Components/Layout';

const Owner = () => {
  return (
    <Layout title="Popietarios">
      <div className="w-full h-full overflow-scroll fixed bg-tenis bg-cover bg-[45%] pt-[50px] pb-[70px]">
        <Card route="/propietarios/canchas" title="Mis canchas" />
        <Card route="/propietarios/agregar-cancha" title="Agregar cancha" />
      </div>
    </Layout>
  );
};

export default Owner;
