import React from "react";
import { LocationInput } from "../Components/LocationInput";


const AAAA = () => {
    const [latitude, setLatitude] = React.useState<number | null>(null);
    const [longitude, setLongitude] = React.useState<number | null>(null);
  
    const handleLocationChange = (latitude: any, longitude: any) => {
      setLatitude(latitude);
      setLongitude(longitude);
    console.log(latitude, longitude);
    
    };
  
    return (
      <div>
        <LocationInput onLocationChange={handleLocationChange} />
        {latitude && longitude && (
          <p>
            Latitud: {latitude}, Longitud: {longitude}
          </p>
        )}
      </div>
    );
};

export default AAAA;
