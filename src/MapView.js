import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Map } from 'react-leaflet';
import { Icon } from "leaflet";
import * as resto from "./data/restaurant.json";
import "./App.css";
import restaurant from "./components/Restaurant";

export const icon = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [50, 50]
});

export default function MapView() {



  const [activePark, setActivePark] = React.useState(null);
        /* console.log(results.results[0].geometry.location.lat); */
  return (
    <MapContainer  center={[52.51366387010728, 13.46198092010728]} zoom={13}>
    
      <TileLayer
        url="https://2.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.day.grey/{z}/{x}/{y}/512/png8?apiKey=NE2s5TgA9jERMDU-qEbyqp371QEqf2hHBlwNhkbVPTw&ppi=320"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'

      />
 {resto.results.map(resto => (
        <Marker
          key={resto.id}
          position={[
            resto.geometry.location.lat,
            resto.geometry.location.lng
          ]}
          onClick={() => {
            setActivePark(resto);
          }}
         
        />
 ))}
      

{activePark && (
        <Popup
          position={[
            activePark.geometry.location.lat,
            activePark.geometry.location.lng
          ]}
          onClose={() => {
            setActivePark(null);
          }}
        >
          <div>
            <h2>{activePark.name}</h2>
            <p>{activePark.formatted_address}</p>
            <p>Rating: {activePark.rating}</p>
          </div>
        </Popup>
      )}


    </MapContainer >
  );
}
