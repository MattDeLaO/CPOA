import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: rgba(20, 20, 20, 0.5);
  height: 10vh;
  border-bottom: 1px solid black;
`
const Tab = styled(props => (
  <Link {...props} activeStyle={{ background: "#292929" }} />
))`
  display: flex;
  height: 90%;
  align-items: center;
  text-transform: uppercase;
  color: white;
  padding: 0px 10px 0px 10px;
  :hover {
    text-decoration: none;
    color: yellow;
  }
`
const Layout = ({ children }) => (
  <>
    <NavTab>
      <Tab to="/covenants">Covenants</Tab>
      <Tab to="/bylaws">Bylaws</Tab>
    </NavTab>
    {children}
  </>
)

export default Layout
