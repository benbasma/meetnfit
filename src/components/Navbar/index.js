import React from "react";
import { FaBars } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <FcSportsMode style={{ fontSize: "50px" }} />
            <span style={{ color: "#ff9800" }}>M</span>eetandFit
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">A propos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Decouvrir</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">S'inscrire</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
/*<NavBtn>
            <NavBtnLink to="/signin">Se Connecter</NavBtnLink>
          </NavBtn>*/
