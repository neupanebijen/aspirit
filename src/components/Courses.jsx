import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

import WidthContainer from "./WidthContainer.jsx"
import { SlideRight, FadeUp } from "./Animations.jsx"

import Board from "../assets/board.png"
import Teacher from "../assets/teacher.png"
import SAT from "../assets/SAT.svg"
import IELTS from "../assets/IELTS.svg"
import GRE from "../assets/GRE.svg"
import GMAT from "../assets/GMAT.svg"
import PTE from "../assets/PTE.svg"
import TOEFL from "../assets/TOEFL.svg"

const SectionContainer = styled.div`
  background-color: #e6e6e6;
  position: relative;
`

const InnerContainer = styled(WidthContainer)`
  margin: 0 auto;
  background: url("${Board}");
  background-size: 100% 100%;
  position: relative;
  padding-bottom: 10rem;
`

const Heading = styled.div`
  font-family: "KGBrokenVesselsSketch";
  text-align: center;
  font-size: 12.6rem;
  color: #fff;

  padding-top: 4.3%;

  @media (max-width: 900px) {
    font-size: 9.6rem;
  }

  @media (max-width: 600px) {
    font-size: 6rem;
  }
`

const RowContainers = styled.div`
  display: flex;
  flex-direction: column;
`

const FirstRow = styled.div`
  display: flex;
  width: 75%;
  margin: 0 auto;
  margin-top: 2rem;

  @media (max-width: 600px) {
    width: 80%;
  }
`

const SecondRow = styled.div`
  display: flex;
  width: 75%;
  margin-top: 8rem;
  margin-left: auto;

  @media (max-width: 600px) {
    width: 80%;

    margin-top: 4rem;
  }
`

const CourseImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.1);
  }
`

const CourseImage = styled.img`
  cursor: pointer;
  width: 41%;

  opacity: 0;

  &.animate {
    animation: 1s ${FadeUp} ease forwards;
    animation-delay: 0.5s;
  }

  @media (max-width: 600px) {
    width: 60%;
  }
`

const ImageContainer = styled.div`
  position: absolute;

  height: 55%;
  width: 25%;

  bottom: 0;

  opacity: 0;

  &.animate {
    animation: 1s ${SlideRight} ease forwards;
  }

  @media (max-width: 600px) {
    height: 35%;
    width: 35%;
  }
`

const Courses = () => {
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
    <SectionContainer id="Courses">
      <InnerContainer>
        <Heading>WE TEACH</Heading>
        <RowContainers ref={inViewRef}>
          <FirstRow>
            <CourseImageContainer>
              <CourseImage src={SAT} className={isInView ? "animate" : ""} />
            </CourseImageContainer>
            <CourseImageContainer>
              <CourseImage src={IELTS} className={isInView ? "animate" : ""} />
            </CourseImageContainer>
            <CourseImageContainer>
              <CourseImage src={PTE} className={isInView ? "animate" : ""} />
            </CourseImageContainer>
          </FirstRow>
          <SecondRow>
            <CourseImageContainer>
              <CourseImage src={GMAT} className={isInView ? "animate" : ""} />
            </CourseImageContainer>
            <CourseImageContainer>
              <CourseImage src={TOEFL} className={isInView ? "animate" : ""} />
            </CourseImageContainer>
            <CourseImageContainer>
              <CourseImage src={GRE} className={isInView ? "animate" : ""} />
            </CourseImageContainer>
          </SecondRow>
        </RowContainers>
        <ImageContainer className={isInView ? "animate" : ""}>
          <img src={Teacher} width="100%" height="100%" />
        </ImageContainer>
      </InnerContainer>
    </SectionContainer>
  )
}

export default Courses
