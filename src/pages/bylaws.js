import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/MainLayout"
import styled from "styled-components"
import { NoResults } from "../components/NoResults"
import SearchBar from "../components/SearchBar"
import SEO from "../components/seo"

const Heading = styled.h3`
  color: white;
  letter-spacing: 1px;
  background: #14293d;
  padding: 5px;
  border-radius: 4px;
  text-align: center;
`
const Body = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;
  text-indent: 2em;
`
const SectionHeading = styled.h5`
  text-decoration: underline;
  text-indent: 2em;
  letter-spacing: 1px;
  margin: 5px;
`
const SectionText = styled.p`
  text-indent: 3em;
  margin-top: 10px;
  margin-bottom: 15px;
`
const SectionWrapper = styled.div``

const Content = styled.div`
  padding: 5%;
  min-height: 76vh;
`
const Bylaws = () => {
  const siteData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          strings {
            bylaws {
              title
              body
              sections {
                heading
                text
              }
              isVisible
            }
          }
        }
      }
    }
  `)
  const bylaws = siteData.site.siteMetadata.strings[0].bylaws
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const handleChange = event => {
    setSearchTerm(event.target.value)
  }
  useEffect(() => {
    const results = bylaws.filter(bylaw =>
      bylaw.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm])

  return (
    <Layout>
      <SEO title="Cobblestone Bylaws" />
      <SearchBar
        placeHolderText={"Search Bylaws"}
        value={searchTerm}
        handleOnChange={handleChange}
        id="Top"
      />
      <Content>
        {searchResults.map(bylaw => (
          <>
            <Heading key={`${bylaw.title} + bylaw title`}>
              {bylaw.title}
            </Heading>
            <Body key={`${bylaw.title} + bylaw body`}>{bylaw.body}</Body>
            {bylaw.sections &&
              bylaw.sections.map(section => (
                <SectionWrapper key={`${section.heading} + section wrapper`}>
                  <SectionHeading key={`${section.heading} + section heading`}>
                    {section.heading}
                  </SectionHeading>
                  <SectionText key={`${section.heading} + section text`}>
                    {section.text}
                  </SectionText>
                </SectionWrapper>
              ))}
          </>
        ))}
        {!searchResults && <NoResults />}
      </Content>
    </Layout>
  )
}
export default Bylaws
