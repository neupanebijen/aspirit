import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import { HashLink as Link } from "react-router-hash-link"

import WidthContainer from "./WidthContainer.jsx"
import Heading from "./Heading.jsx"
import { ScaleUp } from "./Animations"

import ServicesIcon from "../assets/servicesIcon.svg"
import ServicesImage1 from "../assets/servicesImage1.svg"
import ServicesImage2 from "../assets/servicesImage2.svg"
import ServicesImage3 from "../assets/servicesImage3.svg"
import ServicesImage4 from "../assets/servicesImage4.svg"
import ServicesImage5 from "../assets/servicesImage5.svg"

const Container = styled(WidthContainer)`
  padding: 8rem 0;
  min-height: 125vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardSection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    margin-top: 3.5rem;
  }
`

const CardStyle = styled.div`
  width: 45%;
  min-height: 20rem;

  margin-top: 8rem;
  gap: 3rem;
  display: flex;
  font-family: SegoeUI;
  cursor: default;

  transition: 0.3s all;
  opacity: 0;

  &.animate {
    animation: 1s ${ScaleUp} ease forwards;
  }

  @media (max-width: 600px) {
    width: 100%;

    gap: 0;
    margin-top: 2.5rem;
  }
`

const CardImage = styled.div`
  @media (max-width: 1300px) {
    display: none;
  }
`

const CardInfo = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-top: 0.5rem;
  transition: 0.3s all;

  &:hover {
    box-shadow: 3px 3px 10px rgba(0, 73, 135, 0.16);
    transform: scale(1.1);
    transition: 1s all;
  }
`

const CardTitle = styled.div`
  font-size: 3.5rem;
  color: rgba(0, 73, 135);

  @media (max-width: 1300px) {
    line-height: 3.4rem;
    margin-bottom: 1rem;
  }
`

const CardText = styled.div`
  font-size: 2rem;
  color: #706c6c;
  margin-top: 0.8rem;

  @media (max-width: 450px) {
    font-size: 1.6rem;
  }
`

const CardButton = styled(Link)`
  border-radius: 3rem;
  padding: 0.45rem 2rem 0.7rem 2rem;
  font-size: 2rem;
  cursor: pointer;

  background: rgba(0, 73, 135);
  color: #fff;

  align-self: flex-start;
  margin-top: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media (max-width: 450px) {
    margin-top: 4rem;
    font-size: 1.6rem;
  }
`

const Card = ({ Image, imageAlt, title, text, onClick, linkId, isInView }) => {
  return (
    <CardStyle className={isInView ? "animate" : ""}>
      <CardImage>
        <img src={Image} alt={imageAlt} />
      </CardImage>
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
        <CardButton onClick={onClick} to={`services#${linkId}`}>
          Learn More
        </CardButton>
      </CardInfo>
    </CardStyle>
  )
}

const Services = () => {
  const ref = useRef()
  const [isInView, setIsInView] = useState(false)
  const [inViewRef, inView] = useInView({
    threshold:
      window.innerWidth < 900 ? 0.2 : window.innerHeight < 800 ? 0.2 : 0.5,
  })
  useEffect(() => {
    if (inView) {
      setIsInView(true)
    }
  }, [inView])

  return (
    <Container id="Services" ref={inViewRef}>
      <>
        <Heading
          Icon={ServicesIcon}
          altImage="ServicesIcon"
          whiteText="Our"
          blueText="SERVICES"
        />
        <CardSection>
          <Card
            Image={ServicesImage1}
            imageAlt="Image"
            title="Career Counseling"
            text="Consult with our experts to figure out the right career path for you."
            linkId="career"
            isInView={isInView}
          />
          <Card
            Image={ServicesImage2}
            imageAlt="Image"
            title="Interview Preparation"
            text="Prepare for interview with our proven methods to maximize your chances for getting the visa. "
            linkId="interview"
            isInView={isInView}
          />
          <Card
            Image={ServicesImage3}
            imageAlt="Image"
            title="Documentation Assistance"
            text="Easily prepare and organize all the necessary documents for entire process."
            linkId="documentation"
            isInView={isInView}
          />
          <Card
            Image={ServicesImage4}
            imageAlt="Image"
            title="University Research"
            text="Find the correct university in the correct country for you choosen career path."
            linkId="university"
            isInView={isInView}
          />
          <Card
            Image={ServicesImage5}
            imageAlt="Image"
            title="Mock Tests"
            text="Take our mock tests to test your prepartion level for you desired test."
            linkId="mockTests"
            isInView={isInView}
          />
        </CardSection>
      </>
    </Container>
  )
}

export default Services
