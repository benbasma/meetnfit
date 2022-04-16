import { React, useState, useEffect } from "react";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
// import List from "../Component/List";
import L from "leaflet";
import SearchControl from "./SearchControl";

const { BaseLayer } = LayersControl;

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Location Me</Popup>
    </Marker>
  );
}

function MyLocationMe() {
  const [map, setMap] = useState(null);
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (!map) return;

    L.easyButton("fa-map-marker", () => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
    }).addTo(map);
  }, [map]);

  return (
    // <div className="flex ml-auto">
    //   {/* <List /> */}
    //   <div className="w-4/5">
    <MapContainer
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={20}
      style={{ height: "100vh" }}
      whenCreated={setMap}
    >
      <SearchControl className="MarkerIcon" position="topright" />
      <LayersControl position="topleft">
        <BaseLayer checked name="OpenStreetMap">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png "
          />
        </BaseLayer>
      </LayersControl>
      <LocationMarker />
    </MapContainer>
  );
}
export default MyLocationMe;
