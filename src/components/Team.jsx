import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

import WidthContainer from "./WidthContainer.jsx"
import Heading from "./Heading.jsx"
import { FadeUp } from "./Animations"

import TeamIcon from "../assets/teamIcon.svg"
import SumanImage from "../assets/suman.png"
import AashishImage from "../assets/aashish.png"

const Container = styled(WidthContainer)`
  margin: 0 auto;
  padding: 7rem 0 9rem 0;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 18rem;
  opacity: 0;

  &.animate {
    animation: 1s ${FadeUp} ease forwards;
  }
  @media (max-width: 900px) {
    gap: 10rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

const CardStyle = styled.div`
  width: 23%;
  min-height: 50rem;

  margin-top: 10rem;
  padding: 4rem 2rem;
  font-family: "SegoeUI";

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 5px 6px 10px rgba(16, 63, 65, 0.15);

  transition: 0.3s all;

  &:hover {
    transform: scale(1.1);
    box-shadow: 5px 6px 10px rgba(16, 63, 65, 0.3);
    transition: 0.3s all;
  }

  @media (max-width: 1300px) {
    width: 37%;
  }

  @media (max-width: 900px) {
    width: 50%;
  }

  @media (max-width: 600px) {
    width: 80%;
    margin-top: 8rem;
  }
`

const CardImage = styled.img`
  border-radius: 50%;
  overflow: hidden;

  width: 50%;
  height: 35%;
  background: #fff;
  margin-top: 2rem;
  align-self: center;

  object-fit: contain;
`

const CardText = styled.div`
  font-size: 2rem;
  color: #808080;
  margin-top: 1rem;

  @media (max-width: 1300px) {
    font-size: 1.9rem;
    margin-top: 2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin-top: 2rem;
  }
`

const CardName = styled.div`
  font-size: 2rem;
  color: rgb(0, 73, 135);
  margin-top: 4rem;
`

const CardPosition = styled.div`
  font-size: 1.7rem;
  color: rgb(0, 73, 135);
  margin-bottom: 0.8rem;
`

const Card = ({ Image, name, position, text, isInView }) => {
  return (
    <CardStyle>
      <CardImage src={Image} alt="CardIcon" />
      <CardName>{name}</CardName>
      <CardPosition>{position}</CardPosition>
      <CardText>{text}</CardText>
    </CardStyle>
  )
}

const Team = () => {
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
    <Container ref={inViewRef}>
      <>
        <Heading
          Icon={TeamIcon}
          altImage="Team Icon"
          whiteText="Our"
          blueText="Team"
        />
        <CardContainer className={isInView ? "animate" : ""}>
          <Card
            Image={AashishImage}
            name="Aashish Khokhali"
            position="Chief Executive Officer"
            text="Aashish Khokhali is the CEO of Aspirit Education Services. He is an MBA graduated who is often invited as guest lecturer in various business institutes across the country. He has acclaimed renown during his 8 years of working in this field. "
          />
          <Card
            Image={SumanImage}
            name="Er. Suman Koirala"
            position="Education and Research Head"
            text="Er. Suman Koirala is the head of Education and Research department in Aspirit Education Services. He is an M.IT graduate, and a professional educator. He has been successful working in this field for over 10 years."
          />
        </CardContainer>
      </>
    </Container>
  )
}

export default Team
