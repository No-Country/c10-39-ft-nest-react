import { useState, useEffect, useRef } from 'react';

type LocationInputProps = {
  onLocationChange: (latitude: number, longitude: number) => void;
};

const API_KEY = 'AIzaSyB8rVxLxXlomXkjJ04LRtFHC63AtzSnyw0';

export const LocationInput: React.FC<LocationInputProps> = ({ onLocationChange }) => {
  const [location, setLocation] = useState('');
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
  const autocompleteRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const autocompleteInstance = new google.maps.places.Autocomplete(
      autocompleteRef.current as HTMLInputElement,
      {
        types: ['geocode'],
        componentRestrictions: { country: 'ARG' },
      },
    );
    setAutocomplete(autocompleteInstance);
    autocompleteInstance.addListener('place_changed', handlePlaceChange);
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handlePlaceChange = () => {
    const place = autocomplete?.getPlace();
    if (place && place.geometry) {
      const {
        lat,
        lng,
      } : any = place.geometry.location;
      onLocationChange(lat(), lng());
    }
  };

  const handleSearchClick = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${API_KEY}`,
      );
      const data = await response.json();
      const { lat, lng } = data.results[0].geometry.location;
      onLocationChange(lat(), lng());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" value={location} onChange={handleInputChange} ref={autocompleteRef} />
      <button onClick={handleSearchClick}>Buscar</button>
    </div>
  );
};