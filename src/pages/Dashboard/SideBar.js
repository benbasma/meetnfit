import React from "react";
import { FcSportsMode } from "react-icons/fc";
import {
  FaTimes,
  FaHome,
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { BiNews, BiLogOut } from "react-icons/bi";
import { MdEventNote } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useGlobalContext } from "./context";
import { Link as LinkR } from "react-router-dom";
const Sidebar = () => {
  const { isSideBarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`${isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <div className="logo">
          <FcSportsMode style={{ fontSize: "50px" }} />
          <span style={{ color: "#ff9800" }}>M</span>eetandFit
        </div>
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        <li>
          <a href="/">
            <FaHome />
            Accueil
          </a>
        </li>
        <li>
          <LinkR to="/actualites">
            <BiNews />
            Actualites
          </LinkR>
        </li>
        <li>
          <a href="/">
            <MdEventNote />
            Evenements
          </a>
        </li>
        <li>
          <a href="/">
            <CgProfile />
            Profil
          </a>
        </li>
        <li>
          <a href="/">
            <BiLogOut />
            Se Deconnecter
          </a>
        </li>
      </ul>
      <ul className="social-icons">
        <li>
          <a href="#">
            <FaFacebookSquare />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTwitterSquare />
          </a>
        </li>
        <li>
          <a href="#">
            <FaYoutubeSquare />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagramSquare />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
