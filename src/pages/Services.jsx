import styled from "styled-components"

import Menu from "../components/Menu"
import Heading from "../components/Heading"
import WidthContainer from "../components/WidthContainer"
import Footer from "../components/Footer"

import ServicesIcon from "../assets/servicesIcon.svg"
import ServicesImage1 from "../assets/servicesImage1.svg"
import ServicesImage2 from "../assets/servicesImage2.svg"
import ServicesImage3 from "../assets/servicesImage3.svg"
import ServicesImage4 from "../assets/servicesImage4.svg"
import ServicesImage5 from "../assets/servicesImage5.svg"

const PageContainer = styled.div`
  padding-top: 15rem;
  font-family: "SegoeUI";

  @media (max-width: 600px) {
    padding-top: 13rem;
  }
`

const OuterContainer = styled.div`
  background-color: ${(props) => (props.isEven ? "#E6E6E6" : "#fff")};
  padding: 15rem 0 5rem 0;
  height: 100vh;

  @media (max-width: 900px) {
    height: auto;
    padding: 5rem 0;
  }
`

const InnerContainer = styled(WidthContainer)`
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  flex-direction: ${({ isEven }) => (isEven ? "row-reverse" : "row")};

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`

const SectionImage = styled.img`
  width: 45%;

  @media (max-width: 600px) {
    width: 75%;
  }
`

const TextContainer = styled.div`
  width: 45%;
  height: 70vh;

  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: ${(props) => (props.isEven ? "#000" : "#707070")};
  box-shadow: 1px 1px 50px rgba(0, 73, 135, 0.15);
  padding: 5rem 3rem;

  overflow: scroll;

  @media (max-width: 900px) {
    width: 90%;
    height: auto;
    box-shadow: none;
  }
`

const TitleStyled = styled.div`
  font-size: 4rem;
  color: rgb(0, 73, 135);

  @media (max-width: 900px) {
    text-align: center;
  }

  @media (max-width: 450px) {
    font-size: 3.6rem;
    line-height: 3.5rem;
  }
`

const TextStyled = styled.div`
  font-size: 2rem;
  line-height: 3rem;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`

const FooterContainer = styled.div`
  padding-top: 10rem;
  background-color: #e6e6e6;
`

const Section = ({ Image, title, text, isEven, id }) => {
  const texts = text.split("\n")
  return (
    <OuterContainer isEven={isEven} id={`${id}`}>
      <InnerContainer isEven={isEven}>
        <SectionImage src={Image} alt="Image" />
        <TextContainer isEven={isEven}>
          <TitleStyled>{title}</TitleStyled>
          {texts.map((value, index) => (
            <TextStyled key={index}>{value}</TextStyled>
          ))}
        </TextContainer>
      </InnerContainer>
    </OuterContainer>
  )
}

const Gap = styled.div`
  @media (max-width: 900px) {
    margin-top: 3rem;
  }
`

const text = {
  carrerCounselling: `Choosing career will be the single most important descision of your student life. To make sure that you make the correct decision, our experienced experts who have worked with many students across the course their own careers help you with the decision of choosing your path. 
  We will take your interets and ability into account while suggesting the ideal career path for you. Plans and preparations will be vastly different depending on the career path that you choose. We will guide you through the process you will need to follow to reach the point in career that you would like.
  One more important factor will be the country where you will be pursuing your desired career. We are currently working together with university of over 5 countries to assist students to kick start their education leading to better career opprtunities. `,
  interviewPreparation: `Method of interview and its preparation will vary depending on the country you are applying to. However, it still is the final roadblock that every single on of us in the pursuit of foreign education must overcome. This final step is the one that gets students the most anxious, and somtimes in miutes has the ability to determine the course of future.
  To understand the process and maximize the chances of visa approval, we've spent huge amount of resources, and come up with the best methods to prepare you for your interview. Not only that, you can have first hand conversations with our experts and other students who have already appeared for the interview. 
  With us, students are fully prepared and confident to take on this challenge, and more often than not, come up with the good news.`,
  mockTests: `Students applying to foreign university need result of some form of testing. For those who want to test their level of prepartion for the test, we provide mock tests which simulate real test experience, such that students can get real representation on their abilities. 
  Currently we conduct mock tests on : 
  - IELTS/TOEFL
  - SAT
  - PTE
  - GRE 
  - GMAT`,
  documentationAssistance: `Gathering all the differnt documents that you need can be a hassle. For starters, its difficult to figure out which documents you will require for your university. Then after you've done that, there is again the tedious process of gathering all the documents. 
  For that predicament, we are here to simplify the process where we will, first provide you with the list of all the documents that you will need. We will then help you organize those documents in the most suitable manner. Finally, we will aid you to send the documents to your university such that process gets completed without a hitch. 
  In case of some missing documents, we will also provide you with help to create/recover them.  `,
  universityResearch: `With thosands of universities to choose from, it can be a daunting task to figure out the correct one for you. With us, you do not have to worry about that as we are partnered with multiple universities across five different countries. 
  Whie choosing the university, we will focus on the subject of your choice and financial assitance you require. With the consult of our experts who have even visities these university on site themselves, you will be sure to find the right university for you. `,
}

const Services = () => {
  return (
    <PageContainer>
      <Menu />
      <Heading
        Icon={ServicesIcon}
        altImage="Image"
        whiteText="Our"
        blueText="Services"
      />
      <Gap />
      <Section
        Image={ServicesImage1}
        title="Career Counselling"
        text={text.carrerCounselling}
        isEven={false}
        id="career"
      />
      <Section
        Image={ServicesImage2}
        title="Interview Preparation"
        text={text.interviewPreparation}
        isEven={true}
        id="interview"
      />
      <Section
        Image={ServicesImage3}
        title="Documentation Assistance"
        text={text.documentationAssistance}
        isEven={false}
        id="documentation"
      />
      <Section
        Image={ServicesImage4}
        title="University Research"
        text={text.universityResearch}
        isEven={true}
        id="university"
      />
      <Section
        Image={ServicesImage5}
        title="Mock Tests"
        text={text.mockTests}
        isEven={false}
        id="mockTests"
      />
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </PageContainer>
  )
}

export default Services
