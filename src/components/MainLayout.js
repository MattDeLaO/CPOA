import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { BsArrowLeft } from "react-icons/bs"

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
  display: inline;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  color: white;
  width: 50px;
  height: 20px;
  padding-left: 2%;
  padding-top: 1%;
  a {
    text-decoration: none;
  }
  :hover {
    cursor: pointer;
  }
`
const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background: #14293d;
  color: white;
`
const Layout = ({ children }) => (
  <>
    <BackButton to="/">
      <BsArrowLeft style={{ color: "#14293D" }} size={18} />
    </BackButton>
    <NavTab>
      <Tab to="/covenants">Covenants</Tab>
      <Tab to="/bylaws">Bylaws</Tab>
    </NavTab>
    {children}
    <Footer>Contact Us</Footer>
  </>
)

export default Layout
