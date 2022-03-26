import React from "react";
import {
  FooterContainer,
  Footerwrap,
  FooterLinksContainer,
  FooterLinkswrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediawrap,
  SocialIcons,
  SocialIconLink,
  SocialLogo,
  WebsiteRights,
} from "./FooterElements";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
const Footer = () => {
  return (
    <FooterContainer>
      <Footerwrap>
        <FooterLinksContainer>
          <FooterLinkswrapper>
            <FooterLinkItems>
              <FooterLinkTitle>A propos de nous</FooterLinkTitle>
              <FooterLink to="/">A propos de nous</FooterLink>
              <FooterLink to="/">A propos de nous</FooterLink>
              <FooterLink to="/">A propos de nous</FooterLink>
              <FooterLink to="/">A propos de nous</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/">A propos de nous</FooterLink>
              <FooterLink to="/">A propos de nous</FooterLink>
              <FooterLink to="/">A propos de nous</FooterLink>
              <FooterLink to="/">A propos de nous</FooterLink>
            </FooterLinkItems>
          </FooterLinkswrapper>
          <FooterLinkswrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contactez-Nous</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Sponsors</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinkswrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediawrap>
            <SocialLogo to="/">
              <FcSportsMode style={{ fontSize: "2rem" }} />
              MeetandFit
            </SocialLogo>
            <WebsiteRights>
              MeetandFit © {new Date().getFullYear()} Tous Droits réservés
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Intagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediawrap>
        </SocialMedia>
      </Footerwrap>
    </FooterContainer>
  );
};

export default Footer;
