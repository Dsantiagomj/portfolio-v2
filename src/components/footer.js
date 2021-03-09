import { Link } from "gatsby"
import React from "react"

import styled from "styled-components"
import { AiOutlineMail, AiOutlineLinkedin, AiFillGithub } from "react-icons/ai"
import { RiGatsbyLine } from "react-icons/ri"

import Container from "../components/container"

import LogoImage from "../images/white_logo.png"

const Card = styled.div`
  align-items: center;
  background: #141c3a;
  border-radius: 12px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px #141c3a;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
  margin-top: -9rem;
  padding: 3.5rem 1.25rem;
  max-width: 60rem;
  width: 90%;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`
const CardTitle = styled.h2`
  color: white;
  font-size: 1.25rem;
  font-weight: 800;
  margin: 0;
  margin-bottom: 1rem;
  @media (min-width: 1024px) {
    margin: 0;
  }
`

const CardText = styled.p`
  color: white;
  font-size: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  text-align: center;
  @media (min-width: 1024px) {
    margin: 0;
    width: 400px;
  }
`

const CardButton = styled.button`
  background: transparent;
  border: solid 2px #0bd8a2;
  border-radius: 0.25rem;
  color: white;
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding: 0.5rem;
  transition: background 0.3s ease-in-out;
  width: 190px;
  &:hover {
    background: #0bd8a2;
    color: white;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    margin: 0;
  }
`

const List = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  margin: auto;
  margin-bottom: 2rem;
  max-width: 25rem;
`

const ListItem = styled.li`
  border: solid 2px rgba(255, 255, 255, 0.3);
  border-radius: 100%;
  color: white;
  height: 48px;
  position: relative;
  transition: background-color 0.1s ease-in-out;
  width: 48px;
  &:hover {
    background-color: white;
    color: #0bd8a2;
  }
`
const Icon = styled.div`
  align-items: center;
  display: inline-flex;
  font-size: 1.25rem;
  justify-content: center;
  position: absolute;
  top: 12px;
  left: 12px;
  @media (min-width: 768px) {
    top: 10px;
    left: 10px;
  }
`

const Typography = styled.p`
  color: white;
  margin: 0;
  opacity: 0.7;
  text-align: center;
`

const TitleText = styled(Typography)`
  font-size: 1.25rem;
  margin: 1rem auto 3rem;
  width: 20rem;
`

const AdditionalText = styled(Typography)`
  font-size: 0.8rem;
  padding-top: 1rem;
`

const CopyrightText = styled(Typography)`
  font-size: 0.7rem;
`

const Copyright = styled.div`
  align-items: center;
  display: flex;
  font-weight: 600;
  justify-content: center;
`

const Footer = ({ location }) => {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <Container backgroundColor="#00343d" padding="4rem 0">
      {location !== "/contact" && (
        <Card>
          <CardTitle>Start a project</CardTitle>
          <CardText>
            Interested in working together? Let's schedule a call.
          </CardText>
          <Link to="/contact">
            <CardButton>Let's Talk</CardButton>
          </Link>
        </Card>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 50,
          width: "100vw",
        }}
      >
        <img
          src={LogoImage}
          style={{ margin: 0, maxWidth: 250, height: 100 }}
          alt="DS Logo"
        />
      </div>
      <TitleText>Living, learning & leveling up one day at a time.</TitleText>
      <List>
        <a
          href="https://www.github.com/dsantiagomj/"
          target="_blank"
          rel="noreferrer"
        >
          <ListItem>
            <Icon>
              <AiFillGithub />
            </Icon>
          </ListItem>
        </a>

        <a
          href="https://www.linkedin.com/in/dsantiagomj/"
          target="_blank"
          rel="noreferrer"
        >
          <ListItem>
            <Icon>
              <AiOutlineLinkedin />
            </Icon>
          </ListItem>
        </a>
        <a href="mailto:dsantiagomj@icloud.com" rel="noreferrer">
          <ListItem>
            <Icon>
              <AiOutlineMail />
            </Icon>
          </ListItem>
        </a>
      </List>

      <AdditionalText>
        Handcrafted by @dsantiagomj - © {currentYear}
      </AdditionalText>

      <Copyright>
        <CopyrightText>Made with </CopyrightText>
        <RiGatsbyLine
          style={{
            fontSize: "1rem",
            marginLeft: "0.25rem",
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
        />
      </Copyright>
    </Container>
  )
}

export default Footer
