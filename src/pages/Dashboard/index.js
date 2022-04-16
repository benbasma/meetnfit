import React from "react";
import Home from "./Home";
import SideBar from "./SideBar";
import { AppProvider } from "./context";
const Dash = () => {
  return (
    <AppProvider>
      <Home />
      <SideBar />
    </AppProvider>
  );
};

export default Dash;
