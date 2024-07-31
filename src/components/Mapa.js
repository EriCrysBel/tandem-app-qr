import React, { useState, useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = ({ setLatLng, latLng }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      const L = require('leaflet');

      // Arreglar el problema de los iconos que no se muestran
      import('leaflet/dist/images/marker-icon.png');
      import('leaflet/dist/images/marker-icon-2x.png');
      import('leaflet/dist/images/marker-shadow.png');

      delete L.Icon.Default.prototype._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
        iconUrl: require('leaflet/dist/images/marker-icon.png').default,
        shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
      });
    }
  }, [isClient]);
  if(isClient){
    
  }
  const LocationMarker = ({ setLatLng }) => {
    useMapEvents({
      click(e) {
        setLatLng(e.latlng);
      },
    });
  
    return null;
  };

  return (
    <>
    {isClient && (

    <MapContainer center={[40.030501, -3.604052]} zoom={13} style={{ height: '50vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker setLatLng={setLatLng} />
      {latLng && (
        <Marker position={latLng}>
          <Popup>
            Latitud: {latLng.lat}, Longitud: {latLng.lng}
          </Popup>
        </Marker>
      )}
    </MapContainer>
    )}
    </>
  );
};

export default Mapa