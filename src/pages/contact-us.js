import React from "react"
import styled from "styled-components"

const Content = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #14293d;
  color: white;
  height: 10vh;
`
const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background: #14293d;
  color: white;
`
const Contact = () => {
  return (
    <>
      <Header>Contact Us</Header>
      <Content>Contact us form here</Content>
      <Footer>Home</Footer>
    </>
  )
}

export default Contact
