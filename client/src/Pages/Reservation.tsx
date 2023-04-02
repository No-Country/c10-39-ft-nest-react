import Layout from "../Components/Layout";
import SportCard from "../Components/SportCard";
import { useState, useEffect } from "react";
import { getAllSports } from "../Functions/SportPetition";

const Reservation = () => {
  const [sports, setSports] = useState<object[] | null>(null);

  useEffect(() => {
    getAllSports(setSports);
  }, []);
  return (
    <Layout title="Deportes">
      <div className="bg-home">
        {/*
        {
          sports?.map( (sport)=>{  
            <SportCard
            backgroundImage={sport.image}
              title={sport.title}
             />
          })
        }
         
        */}
        <SportCard title="Tenis" />
        <SportCard title="Futbol" />
      </div>
    </Layout>
  );
};

export default Reservation;
