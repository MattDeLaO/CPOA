import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { BsArrowLeft } from "react-icons/bs"
import { Copyright } from "../components/Copyright"

const NavTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 10vh;
  border-bottom: 5px solid #14293d;
`
const Tab = styled(props => (
  <Link {...props} activeStyle={{ background: "#14293D", color: "white" }} />
))`
  display: flex;
  justify-content: center;
  align-item: center;
  height: 100%;
  width: 140px;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: black;
  padding: 0px 10px 0px 10px;
  :hover {
    text-decoration: none;
    color: black;
  }
  :active {
    color: white;
  }
`
const BackButton = styled(props => <Link {...props} />)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  color: white;
  width: 10vw;
  height: 9vh;
  a {
    text-decoration: none;
  }
  :hover {
    cursor: pointer;
  }
`
const ContactUs = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: white;
  hover: {
    cursor: pointer;
  }
`
const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 10vh;
  width: 100%;
  background: #14293d;
  color: white;
`
const BackToTopButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #14293d;
  min-width: 10%;
  border-radius: 25px;
  padding: 8px;
  :hover {
    text-decoration: underline;
  }
`
const BackToTopButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
  margin-bottom: 5%;
`
const Layout = ({ children }) => (
  <>
    <BackButton to="/">
      <BsArrowLeft style={{ color: "#14293D" }} size={20} />
    </BackButton>
    <NavTab>
      <Tab to="/covenants">Covenants</Tab>
      <Tab to="/bylaws">Bylaws</Tab>
    </NavTab>
    {children}
    <BackToTopButtonWrapper>
      <BackToTopButton href="#Top">Back To Top</BackToTopButton>
    </BackToTopButtonWrapper>

    <Footer>
      <ContactUs to="/contact-us">Contact Us</ContactUs>
      <Copyright />
    </Footer>
  </>
)

export default Layout
