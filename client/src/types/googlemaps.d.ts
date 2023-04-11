declare namespace google.maps {
    class LatLng {
      constructor(lat: number, lng: number);
    }
  
    class LatLngLiteral {
      lat: number;
      lng: number;
    }
  
    class Geocoder {
      geocode(
        request: GeocoderRequest,
        callback: (results: GeocoderResult[], status: GeocoderStatus) => void
      ): void;
    }
  
    interface GeocoderRequest {
      address?: string;
      location?: LatLng | LatLngLiteral;
    }
  
    interface GeocoderResult {
      geometry: {
        location: LatLng;
      };
    }
  
    type GeocoderStatus = 'OK' | 'ZERO_RESULTS' | 'OVER_QUERY_LIMIT' | 'REQUEST_DENIED' | 'INVALID_REQUEST';
  }
  