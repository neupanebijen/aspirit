import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

import WidthContainer from "./WidthContainer.jsx"
import Heading from "./Heading.jsx"
import { FadeUp } from "./Animations.jsx"

import GlobeAndPlane from "../assets/globeAndPlane.svg"
import USA from "../assets/usa.svg"
import Australia from "../assets/australia.svg"
import Canada from "../assets/canada.svg"
import UK from "../assets/uk.svg"
import Japan from "../assets/japan.svg"

const Container = styled(WidthContainer)`
  padding: 8rem 0;
  min-height: 80vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const CardSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  @media (max-width: 1300px) {
    justify-content: space-around;
    flex-wrap: wrap;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const CardStyle = styled.div`
  padding: 3rem 3rem;
  cursor: pointer;
  transition: 0.3s all;

  display: flex;
  justify-content: center;

  &:hover {
    box-shadow: 3px 3px 10px rgba(0, 73, 135, 0.16);
    transform: scale(1.1) rotate();
    transition: 0.3s all;
  }

  @media (max-width: 900px) {
    width: 40%;
  }

  @media (max-width: 600px) {
    width: 85%;
    margin: 0 auto;
  }
`

const AnimateImage = styled.img`
  &.animate {
    animation: 0.5s ${FadeUp} ease-out forwards;
  }
  width: 70%;
  opacity: 0;

  @media (max-width: 600px) {
    width: 55%;
  }
`
const Card = ({ Image, altText, isInView }) => {
  return (
    <CardStyle>
      <AnimateImage
        src={Image}
        alt={altText}
        className={isInView ? "animate" : ""}
      />
    </CardStyle>
  )
}

const NewHeading = styled(Heading)`
  border: 1px solid red;
`
const Destination = () => {
  const ref = useRef()
  const [isInView, setIsInView] = useState(false)
  const [inViewRef, inView] = useInView({
    threshold: window.innerWidth < 900 ? 0.2 : 0.5,
  })
  useEffect(() => {
    if (inView) {
      setIsInView(true)
    }
  }, [inView])

  return (
    <Container id="Destination" ref={inViewRef}>
      <NewHeading
        Icon={GlobeAndPlane}
        altImage="GlobeAndPlane"
        whiteText="Choose Your"
        blueText="DESTINATION"
      />

      <CardSection>
        <Card Image={USA} altText="USA" isInView={isInView} />
        <Card Image={Australia} altText="Australia" isInView={isInView} />
        <Card Image={Canada} altText="Canada" isInView={isInView} />
        <Card Image={UK} altText="UK" isInView={isInView} />
        <Card Image={Japan} altText="Japan" isInView={isInView} />
      </CardSection>
    </Container>
  )
}

export default Destination
