import { useState } from "react"
import styled, { keyframes } from "styled-components"
import { HashLink as Link } from "react-router-hash-link"
import { motion, AnimatePresence } from "framer-motion"

import WidthContainer from "./WidthContainer.jsx"
import Logo from "./Logo.jsx"
import { FadeUp } from "./Animations.jsx"

import UserProfile from "../assets/userProfile.svg"
import UserProfileWhite from "../assets/userProfileWhite.svg"
import Hamburger from "../assets/hamburger.svg"

const MenuContainer = styled.div`
  background-color: rgba(0, 77, 135, 0.25);

  height: 10.5vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-family: PatuaOne;
  font-size: 2.8vh;

  position: fixed;
  top: 0;

  z-index: 2;

  @media (max-width: 1300px) {
    font-size: 2.6vh;
  }
`

const MenuContainerInner = styled(WidthContainer)`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  position: relative;
`

const LeftSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex: 1;
`

const MenuLinkContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  position: relative;

  margin-left: 5%;
  gap: 5%;

  @media (max-width: 1300px) {
  }

  @media (max-width: 900px) {
    visibility: hidden;
  }
`

const MenuLink = styled(Link)`
  text-decoration: none;

  color: #706c6c;
  cursor: pointer;

  position: relative;

  transition: 0.3s transform;

  outline: none;

  animation: ${FadeUp} 1s linear forwards;

  &:hover {
    transform: scale(1.05);
    transition: 0.3s transform;
  }

  &:before {
    content: "";
    position: absolute;

    right: 100%;
    transition: 0.3s right;
  }

  &:hover:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    bottom: -0.4rem;
    background: #2a5ca5;

    transition: 0.3s right;
  }
`

const LogoLink = styled(Link)`
  width: 14vh;
`

const HamburgerIcon = styled.img`
  width: 3rem;
  position: absolute;
  right: 0;

  animation: ${FadeUp} 1s linear forwards;

  @media (min-width: 900.1px) {
    visibility: hidden;
  }
`

const MenuProfileIcon = styled.img`
  @media (max-width: 1300px) {
    transform: scale(0.8);
  }
`

const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <>
      <MenuContainer>
        <MenuContainerInner>
          <LeftSide>
            <LogoLink to="/#Home">
              <Logo />
            </LogoLink>
            <MenuLinkContainer>
              <MenuLink to="/#Home">Home</MenuLink>
              <MenuLink to="/#Destination">Abroad Studies</MenuLink>
              <MenuLink to="/#Courses">Courses</MenuLink>
              <MenuLink to="/#Services">Our Services</MenuLink>
              <MenuLink to="/#Contact">Contact</MenuLink>
              <MenuLink to="/" style={{ position: "absolute", right: "0" }}>
                <img src={UserProfile} alt="Profile Icon" />
              </MenuLink>
            </MenuLinkContainer>
            <HamburgerIcon
              src={Hamburger}
              onClick={() => setToggleMenu(true)}
            />
            <AnimatePresence>
              {toggleMenu && (
                <HamburgerMenu closeMenu={() => setToggleMenu(false)} />
              )}
            </AnimatePresence>
          </LeftSide>
        </MenuContainerInner>
      </MenuContainer>
    </>
  )
}

const LinkHamburger = styled(MenuLink)`
  display: block;
  font-size: 4rem;
  color: #fff;

  animation: none;
  transition: none;

  @media (max-width: 1100px) {
    font-size: 2rem;
  }
`

const HMenuContainer = styled.div`
  position: fixed;

  width: 100vw;
  height: 100vh;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0, 73, 135);

  display: flex;
  justify-content: center;
`

const CloseMenu = styled.button`
  border: none;
  background: none;
  color: #000;

  font-size: 20px;
  padding: 20px;

  position: fixed;
  right: 10%;
  top: 2%;
`
const HInnerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 10%;

  @media (max-width: 1100px) {
    margin-top: 40%;
  }

  @media (max-height: 500px) {
    margin-top: 10%;
  }
`

const HamburgerMenu = ({ closeMenu }) => {
  return (
    <HMenuContainer
      as={motion.div}
      animate={{ y: 0 }}
      initial={{ y: -1000 }}
      exit={{ y: -1000 }}
      transition={{ duration: 0.3 }}
    >
      <CloseMenu onClick={closeMenu}>
        <span style={{ color: "white", fontSize: "200%" }}>X</span>
      </CloseMenu>
      <HInnerMenu>
        <LinkHamburger to="/#Home" color="black" onClick={closeMenu}>
          Home
        </LinkHamburger>
        <LinkHamburger to="/#Destination" color="black" onClick={closeMenu}>
          Abroad Studies
        </LinkHamburger>
        <LinkHamburger to="/#Courses" color="black" onClick={closeMenu}>
          Courses
        </LinkHamburger>
        <LinkHamburger to="/#Services" color="black" onClick={closeMenu}>
          Our Services
        </LinkHamburger>
        <LinkHamburger to="/#Contact" color="black" onClick={closeMenu}>
          Contact
        </LinkHamburger>
        <LinkHamburger to="/#Contact" color="black" onClick={closeMenu}>
          <img src={UserProfileWhite} alt="Profile Icon" />
        </LinkHamburger>
      </HInnerMenu>
    </HMenuContainer>
  )
}
export default Menu
