import React, { useContext, useState } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  return (
    <AppContext.Provider
      value={{ latitude, longitude, setLatitude, setLongitude }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
