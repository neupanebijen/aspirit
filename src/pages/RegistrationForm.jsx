import { useState, useMemo } from "react"
import styled from "styled-components"

import { sendMail } from "../utils/api.js"

import Menu from "../components/Menu"
import Footer from "../components/Footer"
import Heading from "../components/Heading"

import RegistrationIcon from "../assets/registrationIcon.svg"

const PageContainer = styled.div`
  padding-top: 15rem;
  font-family: "SegoeUI";

  @media (max-width: 1300px) {
    padding-top: 13rem;
  }
`

const FooterContainer = styled.div`
  padding-top: 10rem;
  background-color: #e6e6e6;
`

const FormContainer = styled.div`
  width: 70%;
  margin: 10rem auto;
  padding: 4rem 10rem 10rem 6rem;

  font-size: 2.5rem;
  color: #999999;

  box-shadow: 1px 1px 50px rgba(0, 73, 135, 0.15);

  @media (max-width: 1300px) {
    width: 95%;
    font-size: 2rem;
    padding-bottom: 5rem;
    margin-top: 4rem;
  }
`

const InfoText = styled.div`
  margin-top: 6rem;
  margin-bottom: -1rem;

  @media (max-width: 1300px) {
    margin-top: 3rem;
  }
`

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.width};

  @media (max-width: 1300px) {
    flex-direction: column;
    width: 100%;
  }
`

const Input = styled.input`
  box-shadow: 5px 6px 10px rgba(0, 73, 135, 0.15);
  padding: 1rem 2rem;
  border: none;
  border-radius: 3.5rem;
  font-size: 2.5rem;
  color: #999;
  margin-top: 3rem;
  width: ${(props) => props.width};
  appearance: none;
  background: #fff;

  @media (max-width: 1300px) {
    width: 100%;
    font-size: 1.6rem;
    margin-top: 2rem;
  }
`

const InputLong = styled(Input)`
  width: 100%;
`

const Button = styled.div`
  box-shadow: 5px 6px 10px rgba(0, 73, 135, 0.15);
  padding: 1rem 2rem;
  background: #04b5ff;

  width: 13rem;
  border-radius: 20rem;
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  color: #fff;
  @media (max-width: 1300px) {
    font-size: 1.6rem;
    margin-top: 7rem;
  }
`

const Select = styled(Input)`
  outline: none;
  background: #fff;
  cursor: pointer;
`

const RegistrationForm = () => {
  const formTemplate = useMemo(
    () => ({
      testType: "",
      firstName: "",
      middleName: "",
      lastName: "",
      dateOfBirth: "",
      streetAddress1: "",
      streetAddress2: "",
      city: "",
      province: "",
      postalCode: "",
      emailAddress: "",
      phoneNumber: "",
      institute1: "",
      graduation1: "",
      level1: "",
      gpa1: "",
      institute2: "",
      graduation2: "",
      level2: "",
      gpa2: "",
      institute3: "",
      graduation3: "",
      level3: "",
      gpa3: "",
      dateOfExamination: "",
    }),
    []
  )
  const [formData, setFormData] = useState({ ...formTemplate })

  const changeFormData = (field, value) => {
    const newFormData = { ...formData }
    newFormData[field] = value
    setFormData(newFormData)
  }

  const onSubmit = async () => {
    const result = await sendMail(formData, "registration")
    if (result.success) {
      setFormData({ ...formTemplate })
      window.alert("Sucesss")
    } else {
      window.alert("Something went wrong. Please try again")
    }
  }

  return (
    <PageContainer id="top">
      <Menu />
      <Heading
        Icon={RegistrationIcon}
        whiteText="Registration"
        blueText="Form"
      />
      <FormContainer>
        <Select
          as="select"
          onChange={(e) => changeFormData("testType", e.target.value)}
        >
          <option value="" disabled selected>
            Choose your test
          </option>
          <option value="SAT">SAT</option>
          <option value="PTE">PTE</option>
          <option value="IELTS">IELTS</option>
          <option value="GRE">GRE</option>
          <option value="GMAT">GMAT</option>
          <option value="TOEFL">TOEFL</option>
          <option value="Mock Test">Mock Test</option>
        </Select>
        <InfoText>Student's Name</InfoText>
        <InputGroup width="100%">
          <Input
            type="text"
            placeholder="First Name"
            width="30%"
            value={formData.firstName}
            onChange={(e) => changeFormData("firstName", e.target.value)}
          />
          <Input
            type="text"
            placeholder="Middle Name"
            width="30%"
            value={formData.middleName}
            onChange={(e) => changeFormData("middleName", e.target.value)}
          />
          <Input
            type="text"
            placeholder="Last Name"
            width="30%"
            value={formData.lastName}
            onChange={(e) => changeFormData("lastName", e.target.value)}
          />
        </InputGroup>
        <InfoText>Date of Birth</InfoText>
        <InputGroup>
          <Input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => changeFormData("dateOfBirth", e.target.value)}
          />
        </InputGroup>
        <InfoText>Address</InfoText>
        <InputLong
          type="text"
          placeholder="Street Address"
          width="100%"
          value={formData.streetAddress1}
          onChange={(e) => changeFormData("streetAddress1", e.target.value)}
        />
        <InputLong
          type="text"
          placeholder="Street Address2"
          width="100%"
          value={formData.streetAddress2}
          onChange={(e) => changeFormData("streetAddress2", e.target.value)}
        />
        <InputGroup width="75%">
          <Input
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={(e) => changeFormData("city", e.target.value)}
          />
          <Input
            type="text"
            placeholder="State/Province"
            value={formData.province}
            onChange={(e) => changeFormData("province", e.target.value)}
          />
        </InputGroup>
        <Input
          type="text"
          placeholder="Postal/ZIP Code"
          value={formData.postalCode}
          onChange={(e) => changeFormData("postalCode", e.target.value)}
        />
        <InfoText>Contact Information</InfoText>
        <InputGroup width="90%">
          <Input
            type="text"
            placeholder="Email Address"
            width="60%"
            value={formData.emailAddress}
            onChange={(e) => changeFormData("emailAddress", e.target.value)}
          />
          <Input
            type="text"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e) => changeFormData("phoneNumber", e.target.value)}
          />
        </InputGroup>
        <InfoText>Educational Information</InfoText>
        <InputGroup>
          <Input
            type="text"
            placeholder="Name of Institute"
            width="35%"
            value={formData.institute1}
            onChange={(e) => changeFormData("institute1", e.target.value)}
          />
          <Input
            type="text"
            placeholder="Graduation Year"
            width="20%"
            value={formData.graduation1}
            onChange={(e) => changeFormData("graduation1", e.target.value)}
          />
          <Input
            type="text"
            placeholder="Level"
            width="15%"
            value={formData.level1}
            onChange={(e) => changeFormData("level1", e.target.value)}
          />
          <Input
            type="text"
            placeholder="GPA"
            width="15%"
            style={{ marginBottom: "3rem" }}
            value={formData.gpa1}
            onChange={(e) => changeFormData("gpa1", e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Input
            type="text"
            placeholder="Name of Institute"
            width="35%"
            value={formData.institute2}
            onChange={(e) => changeFormData("institute2", e.target.value)}
          />
          <Input
            type="text"
            placeholder="Graduation Year"
            width="20%"
            value={formData.graduation2}
            onChange={(e) => changeFormData("graduation2", e.target.value)}
          />
          <Input
            type="text"
            placeholder="Level"
            width="15%"
            value={formData.level2}
            onChange={(e) => changeFormData("level2", e.target.value)}
          />
          <Input
            type="text"
            placeholder="GPA"
            width="15%"
            style={{ marginBottom: "3rem" }}
            value={formData.gpa2}
            onChange={(e) => changeFormData("gpa2", e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Input
            type="text"
            placeholder="Name of Institute"
            width="35%"
            value={formData.institute3}
            onChange={(e) => changeFormData("institute3", e.target.value)}
          />
          <Input
            type="text"
            placeholder="Graduation Year"
            width="20%"
            value={formData.graduation3}
            onChange={(e) => changeFormData("graduation3", e.target.value)}
          />
          <Input
            type="text"
            placeholder="Level"
            width="15%"
            value={formData.level3}
            onChange={(e) => changeFormData("level3", e.target.value)}
          />
          <Input
            type="text"
            placeholder="GPA"
            width="15%"
            value={formData.gpa3}
            onChange={(e) => changeFormData("gpa3", e.target.value)}
          />
        </InputGroup>
        <InfoText>Date of Examination</InfoText>
        <Input
          type="date"
          value={formData.dateOfExamination}
          onChange={(e) => changeFormData("dateOfExamination", e.target.value)}
        />
        <Button style={{ fontFamily: "SegoeUI" }} onClick={() => onSubmit()}>
          Submit
        </Button>
      </FormContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </PageContainer>
  )
}

export default RegistrationForm
