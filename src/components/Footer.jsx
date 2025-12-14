import styled from "styled-components"
import { HashLink as Link } from "react-router-hash-link"

import WidthContainer from "./WidthContainer"
import Location from "../assets/location.svg"
import Phone from "../assets/phone.svg"
import Email from "../assets/email.svg"
import Facebook from "../assets/facebook.svg"
import Instagram from "../assets/instagram.svg"
import Tiktok from "../assets/tiktok.svg"

const OuterContainer = styled.div`
  position: relative;
  background: #e6e6e6;
  z-index: 1;
  padding-top: 0rem;
`

const Container = styled(WidthContainer)`
  padding: 0 0 14vh 0;
  margin: 0 auto;
  font-family: "SegoeUI";

  position: relative;

  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 30%;

  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 5rem;
  }
`

const UsefulLinks = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  align-items: flex-start;
  padding-left: 5%;

  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 5rem;
    padding-left: 0;
  }
`

const Map = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 900px) {
    width: 100%;
  }
`

const HeadingText = styled.div`
  color: #2a5ca5;
  font-size: 3rem;
  padding-bottom: 1rem;
  margin-bottom: 2rem;

  position: relative;
  font-weight: bold;

  &:before {
    content: "";
    position: absolute;

    left: 0%;
    top: 100%;
    bottom: -5%;
    right: ${(props) => props.length};

    background: #706c6c;
  }

  @media (max-width: 600px) {
    font-size: 2.6rem;
    margin-bottom: 0;
  }
`

const IconText = styled.div`
  font-size: 2rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  color: rgba(0, 73, 135);

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`

const IconLink = styled.a`
  text-decoration: none;
  outline: none;

  cursor: pointer;
  z-index: 1;
`

const IconTextLinks = styled(Link)`
  text-decoration: none;
  color: rgba(0, 73, 135);
  font-size: 2rem;

  cursor: pointer;
  transition: 0.3s transform;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s transform;
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`

const MapImage = styled.iframe`
  border: none;
  box-shadow: 1px 1px 50px rgba(0, 73, 135, 0.16);
`

const CenterText = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    justify-content: start;
  }
`

const Credentials = styled.div`
  position: absolute;

  font-size: 1.2rem;
  color: rgba(0, 73, 135);

  bottom: 5%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    bottom: 2%;
  }
  @media (max-width: 600px) {
    font-size: 1rem;

    flex-direction: column;
    bottom: 2%;
  }
`

const IconImage = styled.img`
  margin-top: ${(props) => (props.mtop ? props.mtop : "")};
  @media (max-width: 600px) {
    margin-top: 0;
    width: ${(props) => (props.widthX ? props.widthX : "1.8rem")};
  }
`

const Footer = () => {
  return (
    <OuterContainer>
      <Container>
        <Contacts>
          <HeadingText length="68%">Head Office</HeadingText>
          <IconText>
            <IconImage src={Location} /> Aspirit Tower, Opposite to U.S Embassy,
            Maharajgunj, Kathmandu
          </IconText>
          <IconText>
            <IconImage src={Phone} /> 01-4720740
          </IconText>
          <IconText>
            <IconImage src={Email} /> info@aspirit.com
          </IconText>
          <IconText style={{ marginTop: "1rem", gap: "3rem" }}>
            <IconLink href="https://www.facebook.com" target="_blank">
              <IconImage src={Facebook} widthX="3rem" mtop="1rem" />
            </IconLink>
            <IconLink href="https://www.instagram.com" target="_blank">
              <IconImage src={Instagram} widthX="3rem" mtop="1rem" />
            </IconLink>
            <IconLink href="https://www.tiktok.com" target="_blank">
              <IconImage src={Tiktok} widthX="3rem" mtop="1rem" />
            </IconLink>
          </IconText>
        </Contacts>
        <UsefulLinks>
          <HeadingText length="0">Useful Links</HeadingText>
          <IconTextLinks to="/registrationForm#top">
            SAT Registration
          </IconTextLinks>
          <IconTextLinks to="/registrationForm#top">
            PTE Registration
          </IconTextLinks>
          <IconTextLinks to="/registrationForm#top">
            IELTS Registration
          </IconTextLinks>
          <IconTextLinks to="/registrationForm#top">
            GRE Registration
          </IconTextLinks>
          <IconTextLinks to="/registrationForm#top">
            GMAT Registration
          </IconTextLinks>
          <IconTextLinks to="/registrationForm#top">
            TOFEL Registration
          </IconTextLinks>
          <IconTextLinks to="/registrationForm#top">
            Book a Mock Test
          </IconTextLinks>
        </UsefulLinks>
        <Map>
          <CenterText>
            <HeadingText length="0">Find Us on Google Maps</HeadingText>
          </CenterText>
          <MapImage
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14125.273444018796!2d85.3352416!3d27.7383249!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4e813ed3b1615df!2sAspirit!5e0!3m2!1sen!2snp!4v1661362973716!5m2!1sen!2snp"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></MapImage>
        </Map>
        <Credentials>
          <div>
            Copyright &copy; 2023 Aspirit Educational Services. All rights
            reserved.
          </div>
          <div>Designed and Developed by Bijen Neupane.</div>
        </Credentials>
      </Container>
    </OuterContainer>
  )
}

export default Footer
