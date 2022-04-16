import React from "react";
import { useGlobalContext } from "./context";
const Contexty = () => {
  const { latitude, longitude } = useGlobalContext();
  return (
    <>
      <h2>Latitude : {latitude}</h2>
      <h2>Longitude : {longitude}</h2>
    </>
  );
};

export default Contexty;
