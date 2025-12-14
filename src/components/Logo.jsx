import styled from "styled-components"
import LogoImage from "../assets/logo.svg"
import { FadeUp } from "./Animations.jsx"

const LogoContainer = styled.img`
  animation: ${FadeUp} 1s linear forwards;

  @media (min-width: 1200px) {
    padding: 2rem 0;
  }
`
const Logo = () => (
  <LogoContainer src={LogoImage} alt="logo" height="20%" width="100%" />
)

export default Logo
