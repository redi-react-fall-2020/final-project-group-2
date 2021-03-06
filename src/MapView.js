import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useHistory } from "react-router-dom";

import "./App.css";
import { Icon } from "leaflet";

export const icon = new Icon({
  /* iconUrl: "https://i.ibb.co/mTKZvCH/Icon-Shadow2.png", */
  iconUrl: "https://i.ibb.co/m9NxqPt/resto-Icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6.0/dist/images/marker-shadow.png",
  shadowAnchor: [-4, -5],
});

export default function MapView({ restaurants }) {
  let history = useHistory();

  return (
    <MapContainer center={[52.51366387010728, 13.46198092010728]} zoom={13}>
      <TileLayer
        url="https://2.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.day.grey/{z}/{x}/{y}/512/png8?apiKey=NE2s5TgA9jERMDU-qEbyqp371QEqf2hHBlwNhkbVPTw&ppi=320"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.id}
          position={[
            restaurant.geometry.location.lat,
            restaurant.geometry.location.lng,
          ]}
          eventHandlers={{
            click: () => {
              history.push(`/restaurants/berlin/${restaurant.id}`);
            },
          }}
          icon={icon}
        />
      ))}
    </MapContainer>
  );
}
