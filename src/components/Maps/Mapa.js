import { useMemo } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

export const Mapa = () => {
  const center = useMemo(() => ({ lat: 19.432608, lng: -99.133209 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerStyle={{ width: '100%', height: '100%' }}>
      <Marker position={center} />
    </GoogleMap>
  );
};
