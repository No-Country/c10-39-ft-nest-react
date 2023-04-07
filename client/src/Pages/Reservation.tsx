import { useState, useEffect } from 'react';

import Layout from '../Components/Layout';
import SportCard from '../Components/SportCard';
import { getAllSports } from '../Functions/SportPetition';


  interface Sport {
    name: string;
    images: string[];
  }


const Reservation = () => {
  const [sports, setSports] = useState<Sport[] | null>(null); //eslint-disable-line

  useEffect(() => {
    getAllSports(setSports).catch(() => console.log('Sports fetch failed'));
  }, []);
  return (
    <Layout title="Deportes">
      <div className="w-full h-full overflow-scroll fixed bg-cover bg-[45%]">

        <div className="flex flex-col gap-16 mx-1 h-full pt-24 relative lg:flex-row lg:mx-20 lg:pt-0 lg:items-center lg:bottom-20 lg:justify-between">
          {sports?.map((sport, index) => (
            <SportCard bgImage={sport.images[0]} title={sport.name} key={index} />
          ))}
        </div>
        {/* <div className="flex flex-col gap-16 mx-1 h-full pt-24 relative lg:flex-row lg:mx-20 lg:pt-0 lg:items-center lg:bottom-20 lg:justify-between">
          <SportCard
            bgImage={'https://www.rere.jp/beginners/uploads/2019/09/i-471621500-3-1024x667.jpg'}
            title={'Tenis'}
          />
          <SportCard
            bgImage={
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TwyrhmdISweczTXM9p0RRgAAAA%26pid%3DApi&f=1&ipt=5684e1ae9b6fe7e7390755c927508d7eaf52da55cd22cd2ebc777990c8f91d9c&ipo=images'
            }
            title={'Futbol'}
          />
        </div> */}
      </div>
    </Layout>
  );
};

export default Reservation;
