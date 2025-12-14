import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

import { FadeUp } from "./Animations"

import WidthContainer from "./WidthContainer.jsx"
import Heading from "./Heading.jsx"

import TestimonialIcon from "../assets/testimonailIcon.svg"
import CardQuote from "./CardQuote.jsx"

const OuterContainer = styled.div`
  background: #e6e6e6;
`
const Container = styled(WidthContainer)`
  margin: 0 auto;
  padding: 5rem 0;
  min-height: 70vh;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;

  opacity: 0;

  &.animate {
    animation: 1s ${FadeUp} ease forwards;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 0;
  }
`

const CardImage = styled.img`
  border-radius: 50%;
  overflow: hidden;

  width: 30%;
  background: #fff;
  box-shadow: 5px 6px 10px rgba(0, 73, 135, 0.16);
  margin-top: 2rem;

  @media (max-width: 900px) {
    width: 70%;

    display: flex;
    margin: 0 auto;
  }
`

const CardInfo = styled.div`
  font-size: 2rem;
  font-family: "SegoeUI";

  margin-top: 2rem;
  width: 70%;
  heigth: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 450px) {
    font-size: 1.6rem;
  }
`

const CardName = styled.div`
  font-size: 2rem;
  color: #04b5ff;
  margin-top: 7rem;

  @media (max-width: 450px) {
    font-size: 1.6rem;
    margin-top: 4rem;
  }
`

const CardText = styled.div``

const QuoteIcon = styled(CardQuote)`
  position: absolute;

  top: -15%;
  left: 30%;

  @media (max-width: 900px) {
    transform: scale(0.6);
    left: -15%;
    top: -13%;
  }

  @media (max-width: 600px) {
    transform: scale(0.4);
    left: 8%;
    top: -25%;
  }
`

const CardStyle = styled.div`
  position: relative;
  width: 32%;
  min-height: 30rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem 2rem;
  gap: 3rem;
  cursor: default;
  color: #706c6c;

  box-shadow: 2px 5px 10px rgba(0, 73, 135, 0.16);

  transition: 0.3s transform;

  &:hover {
    transform: scale(1.1);
    background-color: #b3e9ff;
    transition: 0.3s transform;
  }

  &:hover ${CardName} {
    color: #706c6c;
  }

  &:hover ${CardImage} {
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    flex-direction: row;
    width: 100%;
    margin-top: 4rem;

    min-height: 15rem;
  }
`

const Card = ({ Image, name, text, isInView }) => {
  const [fill, setFill] = useState("#04B5FF")
  return (
    <CardStyle
      onMouseEnter={() => setFill("#fff")}
      onMouseLeave={() => setFill("#04B5FF")}
    >
      <CardImage src={Image} altText="Image" />
      <CardInfo>
        <CardText>{text}</CardText>
        <CardName>{name}</CardName>
      </CardInfo>
      <QuoteIcon src={CardQuote} fill={fill} />
    </CardStyle>
  )
}

const Testimonials = () => {
  const ref = useRef()
  const [isInView, setIsInView] = useState(false)
  const [inViewRef, inView] = useInView({
    threshold: window.innerWidth < 900 ? 0.3 : 0.5,
  })
  useEffect(() => {
    if (inView) {
      setIsInView(true)
    }
  }, [inView])

  return (
    <OuterContainer ref={inViewRef}>
      <Container>
        <Heading
          Icon={TestimonialIcon}
          altImage="Testimonial Icon"
          whiteText="Our"
          blueText="Success Stories"
        />
        <CardContainer className={isInView ? "animate" : ""}>
          <Card
            Image={TestimonialIcon}
            name="Your Name"
            text="This is the place to enter the words that you enter. This is the place to enter the words. This is the place to enter the words."
          />
          <Card
            Image={TestimonialIcon}
            name="Your Name"
            text="This is the place to enter the words that you enter. This is the place to enter the words. This is the place to enter the words."
          />
          <Card
            Image={TestimonialIcon}
            name="Your Name"
            text="This is the place to enter the words that you enter. This is the place to enter the words. This is the place to enter the words."
          />
        </CardContainer>
      </Container>
    </OuterContainer>
  )
}

export default Testimonials
