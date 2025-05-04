'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

const locations = [
  { city: 'Multan', name: 'Abuzar Razzaq', phone: '+92 30 8090 1111', address: 'House No. 166 B Block Model Town Multan', lat: 30.1575, lng: 71.5249 },
  { city: 'Multan Central', name: 'Farhan Jabbar', phone: '+92 345 8333370', address: 'Hamza Street, Gulshan e Mehar Colony, Near Nishan Hospital, Chungi No. 6, Bosan Road, Multan', lat: 30.2023, lng: 71.4687 },
  { city: 'Lahore Central', name: 'Umair Ijaz', phone: '+92 30 4989 1111', address: 'E6, Executive Floor, Al-Qadeer Heights, Babar Block, New Garden Town, Lahore', lat: 31.5204, lng: 74.3587 },
  { city: 'Sialkot', name: 'Faryad Hussain', phone: '+92 30 1989 1111', address: '1st Floor, Shahab Plaza, Opposite UMT, Shahab Pura Road Sialkot', lat: 32.5, lng: 74.5333 },
  { city: 'Faisalabad', name: 'Usman Ali', phone: '+92 30 7989 1111', address: 'Office # 01, First Floor, p-354, Kashmir Road, Amin Town, Faisalabad', lat: 31.4187, lng: 73.079 },
  { city: 'Sahiwal', name: 'Salman Habib', phone: '+92 30 5989 1111', address: 'Start X 2nd Floor, Central Plaza, High Street, Furniture Bazar Sahiwal', lat: 30.6643, lng: 73.105 },
  { city: 'Peshawar', name: 'Abu Marwan Khan', phone: '+92 32 5989 1111', address: 'Office # GF02 Ground Floor, Majestic Tower, Near Meezan Bank, Peshawar Cantt', lat: 34.0151, lng: 71.5249 },
  { city: 'Sawat', name: 'Anwar Khan', phone: '+92 30 4989 1111', address: 'Office # 01, 1st floor Qadar Plaza, Old Post Office Road, Mingora Sawat', lat: 35.222, lng: 72.4258 },
  { city: 'Wazirabad', name: 'Faryad Hussain', phone: '+92 30 2989 1111', address: 'Minal Plaza Near Punjab Bank, Wazirabad Bypass Wazirabad', lat: 32.4451, lng: 74.1193 }
];

const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export default function MapComponent() {
  useEffect(() => {
    import('leaflet/dist/leaflet.css');
  }, []);

  return (
    <MapContainer center={[30.1575, 71.5249]} zoom={6} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]} icon={customIcon}>
          <Popup>
            <b>{location.name}</b><br />
            {location.city}<br />
            {location.phone}<br />
            {location.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
