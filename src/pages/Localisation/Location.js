import React, { useState, useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
  LayersControl,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { OpenStreetMapProvider } from "react-leaflet-geosearch";
import SearchControl from "./SearchControl";
import L from "leaflet";
import football from "../../images/football.jpg";
// import Description from "./Description";

// import { BiCurrentLocation } from "react-icons/bi";
// import { dblClick } from "@testing-library/user-event/dist/click";
const getIcon = (size, titre) => {
  return L.icon({
    iconUrl: require(`../../icons/${titre}.png`),
    iconSize: [30, 30],
  });
};
const GetButton = () => {
  const map = useMap();
  return L.easyButton("../../icons/football.png", function (btn, map) {
    console.log("you");
  });
};

//Double click
const Markery = () => {
  const [posit, setPosit] = useState(null);
  const map = useMapEvent("dblclick", (e) => {
    setPosit(e.latlng);
    console.log(e.latlng);
  });
  return posit === null ? null : (
    <Marker position={posit}>
      <Popup>Creer un evenement</Popup>
    </Marker>
  );
};

//Get Cuurent Location
const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(position, 18);
    },
    locationerror(e) {
      console.log(e);
    },
  });
  const positionIcon = L.icon({
    iconUrl: require("../../icons/placeholder.png"),
    iconSize: [30, 30],
  });
  return position === null ? null : (
    <Marker position={position} icon={positionIcon}>
      <Popup>Votre Position</Popup>
    </Marker>
  );
};

function BootstrapButton() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    var button = L.control({
      position: "topright",
    });

    button.onAdd = function (map) {
      this._div = L.DomUtil.create("div", "myControl");
      const buttonElement = `<div class="btnWrapper">
      <button class="btn btn-primary">Se Localiser</button>
      </div>`;

      this._div.innerHTML = buttonElement;
      return this._div;
    };

    button.addTo(map);

    return () => map.remove(button);
  }, [map]);

  return null;
}
// the component
const Location = () => {
  const prov = OpenStreetMapProvider();
  const [events, setEvents] = useState(null);
  // const [lat, setLat] = useState(0);
  // const [long, setLong] = useState(0);
  useEffect(() => {
    fetch("http://localhost:8080/evenement")
      .then((res) => res.json())
      .then((result) => {
        setEvents(result);
      });
    // getEvents();
  }, []);

  useEffect(() => {
    events && console.log(events);
    events &&
      events.map((event) => {
        console.log(event);
      });
  }, [events]);
  return (
    <MapContainer
      center={{ lat: 34.020882, lng: -6.84165 }}
      zoom={13}
      style={{
        height: "100vh",
        width: "100wh",
        position: "relative",
        zIndex: 0,
      }}
    >
      <SearchControl
        provider={prov}
        showMarker={true}
        showPopup={false}
        popupFormat={({ query, result }) => result.label}
        maxMarkers={3}
        retainZoomLevel={false}
        animateZoom={true}
        autoClose={true}
        searchLabel={"Enter address, please"}
        keepResult={true}
      />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
      <BootstrapButton />
      {events?.map((event) => {
        const {
          id,
          latitude,
          titre,
          description,
          longitude,
          nbrePersonne,
          date,
          adresse,
        } = event;
        return (
          <div key={id}>
            <Marker position={[latitude, longitude]} icon={getIcon(30, titre)}>
              <Popup>
                <div className="popup">
                  <img
                    src={require(`../../images/${titre}.jpg`)}
                    alt={titre}
                    style={{
                      display: "block",
                      height: "60px",
                      textAlign: "center",
                      margin: "auto",
                    }}
                  />

                  <h4 style={{ textAlign: "center", marginTop: "20px" }}>
                    {titre}
                  </h4>
                  <p>Nombre de places : {nbrePersonne}</p>
                  <p>{description}</p>
                  <p>Date : {date}</p>
                  <p>Adresse : {adresse}</p>

                  {/* <button onClick={nbrePersonne--}>Participer</button> */}
                </div>
              </Popup>
            </Marker>
          </div>
        );
      })}
      {/* <Description
        title={"Se Localiser"}
        markerPosition={[20.27, -157]}
        description="This is a custom description!"
      /> */}
      {/* <GetButton /> */}
      <Markery />
    </MapContainer>
  );
};

export default Location;
