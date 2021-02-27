import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
`
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 30vh;
  padding: 5px;
  background-image: linear-gradient(white, rgba(148, 184, 219, 0.3s));
`
const HomeBanner = styled.div`
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 1px;
  color: black;
  padding: 10px;
  background: white;
`
const HomeButton = styled(props => <Link {...props} />)`
  background: #14293d;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
  color: white;
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
    background: white;
    color: #14293d;
    border: 4px solid #14293d;
  }
`
const IndexPage = ({ className }) => {
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
    <>
      <HomeBanner>
        Welcome to the Cobblestone Property Owner's Association website
      </HomeBanner>
      <ImageWrapper>
        <Img
          fluid={imageData}
          alt=""
          style={{ width: "98%", height: "100%", border: "3px solid #cfe0ee" }}
        />
      </ImageWrapper>
      <ButtonWrapper>
        <HomeButton to="covenants">Covenants & Bylaws</HomeButton>
        <HomeButton to="contact-us">Contact Us</HomeButton>
      </ButtonWrapper>
    </>
  )
}

export default IndexPage
