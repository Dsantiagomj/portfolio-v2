import { Link } from "gatsby"
import React, { useState } from "react"

import styled from "styled-components"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

import Drawer from "./drawer"
import Container from "./container"

import LogoImage from "../images/black_logo.png"

const Menu = styled.ul`
  display: none;
  list-style: none;
  margin: 0;
  width: 16rem;
  @media (min-width: 1024px) {
    align-items: center;
    display: flex;
    justify-content: space-around;
  }
`

const MenuItem = styled.li`
  color: #00343d;
  font-size: 0.875rem;
  margin: 0;
  text-decoration: none;
  &:hover {
    color: #0bd8a2;
    cursor: pointer;
  }
`

const MenuItemButton = styled.button`
  background: transparent;
  border: solid 2px #0bd8a2;
  border-radius: 0.25rem;
  color: #0bd8a2;
  padding: 0.5rem;
  transition: background 0.3s ease-in-out;
  &:hover {
    background: #0bd8a2;
    color: white;
    cursor: pointer;
  }
`

const ResponsiveButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: block;
  font-size: 1.5rem;
  z-index: 3;
  @media (min-width: 1024px) {
    display: none;
  }
`

const Header = () => {
  // responsive navbar status
  const [navbarStatus, setNavbarStatus] = useState(false)
  const responsiveStyles = {
    "padding-top": "2.5rem",
  }

  return (
    <Container
      alignItems="center"
      backgroundColor="white"
      display="flex"
      height="5rem"
      margin="0 auto 1.45rem"
      maxWidth="80rem"
      padding="3rem 0 0.5rem"
      width="100%"
      zIndex={3}
      responsiveStyles={responsiveStyles}
    >
      <Link
        to="/"
        style={{
          color: `#141c3a`,
          textDecoration: `none`,
          zIndex: 3,
        }}
      >
        <img
          style={{ margin: 0 }}
          src={LogoImage}
          alt="DS Logo"
          width="150px"
        />
      </Link>
      <Menu>
        <Link
          to="/about"
          style={{
            color: `#141c3a`,
            textDecoration: `none`,
          }}
        >
          <MenuItem>About me</MenuItem>
        </Link>
        <Link
          to="/contact"
          style={{
            color: `#141c3a`,
            textDecoration: `none`,
          }}
        >
          <MenuItem>
            <MenuItemButton>Get in Touch</MenuItemButton>
          </MenuItem>
        </Link>
      </Menu>

      <ResponsiveButton onClick={() => setNavbarStatus(!navbarStatus)}>
        {navbarStatus ? <AiOutlineClose /> : <AiOutlineMenu />}
      </ResponsiveButton>

      <Drawer isOpen={navbarStatus} />
    </Container>
  )
}

export default Header
