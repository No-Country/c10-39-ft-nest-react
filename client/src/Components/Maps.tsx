import React from 'react';

import { GoogleMap, Marker } from '@react-google-maps/api';

import { type coordsType } from '../types/Sport.type';

interface Props {
  initialCoords: coordsType;
  Coords: coordsType[];
}

const Maps = ({ initialCoords, Coords }: Props) => {
  const [coords, setCoords] = React.useState<coordsType[] | null>(null);

  React.useEffect(() => {
    setCoords(Coords);
  }, [Coords]);

  return (
    <GoogleMap
      mapContainerStyle={{
        width: '100%',
        height: '100%',
        borderRadius: '10px',
      }}
      zoom={12}
      center={initialCoords}
    >
      {/* <Marker 
        position={initialCoords}
        icon={{
          url: '/assets/images/MapMarker.svg',
          scaledSize: new window.google.maps.Size(50, 50),
        }}
      /> */}

      {coords &&
        coords.map((item, index) => {
          return <Marker key={index} position={item} />;
        })}
    </GoogleMap>
  );
};

export default Maps;
