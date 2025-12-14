import { useState, useMemo, useCallback } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import WidthContainer from "./WidthContainer.jsx"
import { FadeInUpText, FadeInUpButton } from "./Animations.jsx"

import HeroSVG from "../assets/heroAnimation.svg"
import Background from "../assets/background.jpg"

const SectionContainer = styled.div`
  background: url(${Background}) rgba(0, 77, 135, 0.25);
  background-size: cover;
  background-blend-mode: multiply;
  font-family: PatuaOne;
  color: rgb(0, 77, 135);

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
`

const InnerSection = styled(WidthContainer)`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  flex: 1;
`

const HeadingText = styled.div`
  font-size: 4.84375vw;
  text-shadow: 2px 5px 10px rgba(0, 0, 0, 0.16);
  margin-top: 20vh;

  display: flex;
  flex-direction: column;
  animation: ${FadeInUpText} 1s linear forwards;

  @media (max-width: 1300px) {
    font-size: 5.5vw;
  }

  @media (max-width: 900px) {
    font-size: 6vw;
  }

  @media (max-width: 700px) {
    width: 55%;
    font-size: 7.2rem;
  }

  @media (max-width: 450px) {
    font-size: 7rem;
    margin-top: 16vh;
  }
`

const TextOne = styled.div``

const TextTwo = styled.div``

const WhiteText = styled.span`
  color: #fff;
`

const Button = styled(Link)`
  text-decoration: none;
  background: #fff;
  border-radius: 5rem;
  box-shadow: 2px 5px 10px rgba(0, 77, 135);
  font-size: 3.6rem;
  padding: 1.5rem 4rem;
  cursor: pointer;
  margin-bottom: 5rem;
  text-shadow: 2px 5px 10px rgba(0, 0, 0, 0.16);
  color: rgb(0, 73, 135);

  transition: 0.3s transform;

  animation: ${FadeInUpButton} 1s linear forwards;

  &:hover,
  &:active,
  &:visited {
    text-decoration: none;
    color: rgb(0, 73, 135);
  }

  &:hover {
    transform: scale(1.05);
    transition: 0.3s transform;
  }

  @media (max-width: 1100px) {
    font-size: 2.8rem;
  }

  @media (max-width: 450px) {
    font-size: 2.4rem;
    margin-bottom: 12rem;
  }
`

const VisaRateButton = styled.div`
  text-decoration: none;
  background: #fff;
  border-radius: 5rem;
  box-shadow: 2px 5px 10px rgba(0, 77, 135);
  font-size: 2rem;
  padding: 1rem 2rem;
  cursor: pointer;
  text-shadow: 2px 5px 10px rgba(0, 0, 0, 0.16);
  color: rgb(0, 73, 135);

  transition: 0.3s transform;

  animation: ${FadeInUpButton} 1s linear forwards;
  margin-top: auto;
  margin-bottom: 3rem;

  &:hover,
  &:active,
  &:visited {
    text-decoration: none;
    color: rgb(0, 73, 135);
  }

  &:hover {
    transform: scale(1.05);
    transition: 0.3s transform;
  }

  @media (max-width: 1100px) {
    font-size: 1.6rem;
  }

  @media (max-width: 450px) {
    font-size: 1.6rem;
  }
`

const HeroAnimationContainer = styled.div`
  position: absolute;
  width: 75%;
  margin-top: 9%;

  left: 25%;

  @media (max-width: 1700px) {
    left: 23%;
    width: 82%;
    margin-top: 10%;
  }

  @media (max-width: 1300px) {
    margin-top: 13.5%;
  }

  @media (max-width: 700px) {
    display: none;
  }

  @media (max-height: 650px) {
    width: 65%;
    margin-top: 10%;
    left: 35%;
  }

  @media (max-width: 850px) {
    @media (min-height: 800px) {
      margin-top: 45%;
      left: 0;
    }
  }
`

const VisaRateBackground = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.3);

  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  z-index: 10;
`

const VisaRateContainer = styled.div`
  position: relative;

  width: 80vw;
  height: 80vh;
  margin: 10vh auto 0 auto;
  border-radius: 1rem;
  background: #fff;
  color: rgb(0, 73, 135);
`

const CloseButton = styled.div`
  position: absolute;
  top: 2vh;
  right: 2vw;

  font-size: 2.5rem;
  font-family: "SegoeUI";
  cursor: pointer;
`

const VisaHeading = styled.div`
  font-size: 3.6rem;
  text-align: center;
  padding-top: 3rem;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`
const Input = styled.input`
  box-shadow: 5px 6px 10px rgba(0, 73, 135, 0.15);
  padding: 1rem 2rem;
  border: none;
  border-radius: 3.5rem;
  font-size: 2rem;
  color: rgb(0, 73, 135);
  margin-top: 3rem;
  width: ${(props) => props.width};
  appearance: none;
  background: #fff;
  width: 25%;
  margin-right: 7%;

  @media (max-width: 1500px) {
    width: 100%;
    font-size: 1.6rem;
    margin-top: 2rem;
  }
`

const InputContainers = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  padding-bottom: 2rem;

  @media (max-width: 1500px) {
    flex-direction: column;
  }
`
const Select = styled(Input)`
  outline: none;
  background: #fff;
  cursor: pointer;
`

const InnerFormContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: 5vh auto 2vh auto;

  display: flex;
  flex-direction: column;
`

const SubmitButton = styled.div`
  font-size: 2rem;
  background: rgb(0, 73, 135);
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 20rem;
  margin-top: 3rem;
  cursor: pointer;
  width: 20rem;
  display: flex;
  justify-content: center;
`
const VisaRateCalculator = ({ closeVisaCalculator }) => {
  const [visaType, setVisaType] = useState("")
  const [message, setMessage] = useState("")

  const visitVisaTemplate = useMemo(
    () => ({
      businessTransaction: 0,
      property: 0,
      previousVisits: 0,
      countriesVisited: 0,
    }),
    []
  )

  const studentVisaTemplate = useMemo(
    () => ({
      gpa: 0,
      ielts: 0,
      sat: 0,
      countriesVisited: 0,
      tuition: 0,
    }),
    []
  )

  const [age, setAge] = useState(0)
  const [visitVisa, setVisitVisa] = useState({ ...visitVisaTemplate })
  const [studentVisa, setStudentVisa] = useState({ ...studentVisaTemplate })

  const calculateVisitVisaChance = () => {
    let visaAmount = 60
    if (age > 40) visaAmount += 10
    if (visitVisa.businessTransaction > 10000000) visaAmount += 10
    if (visitVisa.property < 10000000) visaAmount -= 10
    if (visitVisa.countriesVisited > 2) visaAmount += 10
    if (visitVisa.previousVisits > 1) visaAmount = 95

    return visaAmount
  }

  const calculateStudentVisaChance = () => {
    let visaAmount = 60
    if (studentVisa.gpa > 3.2) visaAmount += 6
    if (studentVisa.gpa > 3.6) visaAmount += 10
    if (studentVisa.SAT > 1200) visaAmount += 6
    if (studentVisa.SAT > 1400) visaAmount += 10
    if (studentVisa.ielts > 7) visaAmount += 10
    if (studentVisa.tuition < 10000) visaAmount += 8
    if (studentVisa.countriesVisited > 2) visaAmount += 5
    if (visaAmount > 98) visaAmount = 98

    return visaAmount
  }

  const editVisitVisa = (property, value) => {
    const newObj = { ...visitVisa }
    newObj[property] = value
    setVisitVisa({ ...newObj })
  }

  const editStudentVisa = (property, value) => {
    const newObj = { ...studentVisa }
    newObj[property] = value
    setStudentVisa({ ...newObj })
  }

  const buttonClicked = () => {
    setMessage(
      `Your have ${
        visaType === "visit"
          ? calculateVisitVisaChance()
          : visaType === "student"
          ? calculateStudentVisaChance()
          : "0"
      }% chance to recieve a visa.`
    )
  }

  return (
    <VisaRateBackground onClick={() => closeVisaCalculator()}>
      <VisaRateContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => closeVisaCalculator()}>X</CloseButton>
        <VisaHeading>Check Your US Visa Chances</VisaHeading>
        <InnerFormContainer>
          <Select as="select" onChange={(e) => setVisaType(e.target.value)}>
            <option value="" disabled selected>
              Choose your visa type
            </option>
            <option value="visit">Visit Visa</option>
            <option value="student">Student Visa</option>
          </Select>
          <Input
            placeholder="Age"
            type="number"
            onChange={(e) => setAge(e.target.value)}
          />
          <InputContainers>
            {visaType === "visit" ? (
              <>
                <Input
                  placeholder="Business Transaction Amount"
                  type="number"
                  onChange={(e) =>
                    editVisitVisa("businessTransaction", e.target.value)
                  }
                />
                <Input
                  placeholder="Property Amount"
                  type="number"
                  onChange={(e) => editVisitVisa("property", e.target.value)}
                />
                <Input
                  placeholder="Number of previous visits"
                  type="number"
                  onChange={(e) =>
                    editVisitVisa("previousVisits", e.target.value)
                  }
                />
                <Input
                  placeholder="Number of countries visited"
                  type="number"
                  onChange={(e) =>
                    editVisitVisa("countriesVisited", e.target.value)
                  }
                />
              </>
            ) : (
              ""
            )}
            {visaType === "student" ? (
              <>
                <Input
                  placeholder="GPA"
                  onChange={(e) => editStudentVisa("gpa", e.target.value)}
                />
                <Input
                  placeholder="IELTS Score"
                  onChange={(e) => editStudentVisa("ielts", e.target.value)}
                />
                <Input
                  placeholder="SAT Score"
                  onChange={(e) => editStudentVisa("sat", e.target.value)}
                />
                <Input
                  placeholder="Number of country visited"
                  onChange={(e) =>
                    editStudentVisa("countriesVisited", e.target.value)
                  }
                />
                <Input
                  placeholder="Yearly tuition Amount"
                  onChange={(e) => editStudentVisa("tuition", e.target.value)}
                />
              </>
            ) : (
              ""
            )}
          </InputContainers>
          {visaType !== "" ? (
            <SubmitButton onClick={() => buttonClicked()}>
              Get My Chances
            </SubmitButton>
          ) : (
            ""
          )}
          <VisaHeading>{message}</VisaHeading>
        </InnerFormContainer>
      </VisaRateContainer>
    </VisaRateBackground>
  )
}

const Hero = () => {
  const [showVisaCalculator, setShowVisaCalculator] = useState(false)

  return (
    <SectionContainer id="Home">
      <InnerSection>
        <HeadingText>
          <TextOne>
            <WhiteText>We</WhiteText> Provide
          </TextOne>
          <TextTwo>
            <WhiteText>BEST</WhiteText> Guidance
          </TextTwo>
        </HeadingText>
        {showVisaCalculator ? (
          <VisaRateCalculator
            closeVisaCalculator={() => setShowVisaCalculator(false)}
          />
        ) : (
          ""
        )}
        <VisaRateButton onClick={() => setShowVisaCalculator(true)}>
          Check You US Visa Chances
        </VisaRateButton>
        <Button to="registrationForm">Register Now</Button>
        <HeroAnimationContainer>
          <img src={HeroSVG} preload />
        </HeroAnimationContainer>
      </InnerSection>
    </SectionContainer>
  )
}

export default Hero
