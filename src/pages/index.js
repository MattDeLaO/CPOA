import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Button } from "react-bootstrap"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`
const Text = styled.div`
  width: 100%;
  color: white;
  text-align: center;
  padding: 10px;
  background: rgba(20, 20, 20, 0.7);
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
      backgroundColor={`#040e18`}
    >
      <ButtonWrapper>
        <Link to="covenants" style={{ margin: 10 }}>
          <Button variant="info">Covenants & Bylaws</Button>
        </Link>
        <Link to="contact-us" style={{ margin: 10 }}>
          <Button variant="info">Contact Us</Button>
        </Link>
      </ButtonWrapper>
      <Text>
        Welcome to the Cobblestone Property Owners Association website!
      </Text>
    </BackgroundImage>
  )
}

const IndexPage = styled(BackgroundSection)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default IndexPage
