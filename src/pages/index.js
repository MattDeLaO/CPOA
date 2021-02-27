import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 5vh;
  padding: 5px;
`
const Text = styled.div`
  width: 100%;
  min-height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 1px;
  color: black;
  padding: 10px;
  background: rgba(255,255,255,.6);
  border-bottom: 3px solid #cfe0ee;
`
const HomeButton = styled(props => <Link {...props} />)`
  background: #F0F5FA;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
  color: black;
  padding: 20px;
  border-radius: 6px;
  border: 3px solid #cfe0ee;
  margin: 12px;
  min-width: 250px;
  :active {
    text-decoration: none;
  }
  :hover {
    text-decoration: none;
    color: white;
    background: #94B8DB;
    border: 4px solid #14293D;
  }
`
const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "MainBackground.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
    >
      <Text>
        Welcome to the Cobblestone Property Owners Association website
      </Text>
      <ButtonWrapper>
        <HomeButton to="covenants" >Covenants & Bylaws</HomeButton>
        <HomeButton to="contact-us" >Contact Us</HomeButton>
      </ButtonWrapper>
     
    </BackgroundImage>
  )
}

const IndexPage = styled(BackgroundSection)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default IndexPage
