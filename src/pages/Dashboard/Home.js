import React from "react";
import { FaBars } from "react-icons/fa";
import "./index.css";
import { useGlobalContext } from "./context";
import Actualites from "../Actualites/Actualites";
const Home = () => {
  const { openSidebar, isActualites } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <Actualites />
    </main>
  );
};

export default Home;
