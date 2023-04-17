import { type FC, useRef, useEffect } from 'react';

interface props {
  label: string;
  // onLocationChange: (latitude: number, longitude: number) => void;
  handleLocationName: (string: string) => void;
  location: string;
  icon?: any;
}

const InputLocation: FC<props> = (props) => {
  const { label, icon, handleLocationName, location } = props;

  const autocompleteRef = useRef<HTMLInputElement>(null);

  // const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

  const handlePlaceChange = () => {
    //   const place = autocomplete?.getPlace();
    //   if (place && place.geometry) {
    //     const { lat, lng }: any = place.geometry?.location;
    // setLocation(place.formatted_address as string);
    //     onLocationChange(lat(), lng());
    //   }
    const inputLocation = autocompleteRef.current;
    if (inputLocation) {
      handleLocationName(inputLocation.value);
    }
  };

  useEffect(() => {
    const autocompleteInstance = new google.maps.places.Autocomplete(
      autocompleteRef.current as HTMLInputElement,
      {
        types: ['geocode'],
        componentRestrictions: { country: 'ARG' },
      },
    );
    // setAutocomplete(autocompleteInstance);
    autocompleteInstance.addListener('place_changed', handlePlaceChange);
  }, []);

  return (
    <div className="w-10/12 flex flex-col relative">
      <input
        id={label}
        className={
          'inputFocus pr-10 bg-bg order-2 transition-colors divide-black divide-solid border-b-2 pb-2 px-2 focus:outline-none'
        }
        type="text"
        value={location}
        onChange={(e) => handleLocationName(e.target.value)}
        ref={autocompleteRef}
        placeholder=""
      />
      <label
        htmlFor={label}
        className={`${
          location.length === 0 ? 'translate-y-7 translate-x-2' : 'inputWritten'
        } w-max cursor-pointer transition-transform order-1 z-[300]`}
      >
        {label}
      </label>
      {icon && (
        <div className="[&>svg]:absolute [&>svg]:bottom-2 [&>svg]:right-2 [&>svg]:w-6 [&>svg]:h-6 pointer-events-none">
          {icon}
        </div>
      )}
    </div>
  );
};

export default InputLocation;
