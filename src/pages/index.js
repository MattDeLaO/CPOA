import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const HomeBanner = styled.div`
  width: 100%;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  padding: 10px;
  background: #14293d;
  color: white;
  border-bottom: 3px solid #cfe0ee;
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

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 30vh;
  padding: 5px;
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

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      <HomeBanner>
        <h3>Cobblestone POA</h3>
        <>Fayetteville, Arkansas</>
      </HomeBanner>
      <ButtonWrapper>
        <HomeButton to="covenants">Covenants & Bylaws</HomeButton>
        <HomeButton to="contact-us">Contact Us</HomeButton>
      </ButtonWrapper>
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default StyledBackgroundSection
