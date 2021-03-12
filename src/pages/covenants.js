import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/MainLayout"
import SearchBar from "../components/SearchBar"
import { NoResults } from "../components/NoResults"
import styled from "styled-components"

const CovenantHeading = styled.h3`
  color: white;
  letter-spacing: 1px;
  background: #14293d;
  padding: 5px;
  border-radius: 4px;
`
const SectionBody = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;
  text-indent: 2em;
`
const SubsectionText = styled.div`
  padding-left: 2%;
  padding-right: 2%;
  text-indent: 3em;
  margin: 10px;
  :first-letter {
    font-weight: bold;
  }
`
const Content = styled.div`
  padding: 5%;
  min-height: 80vh;
`

const Covenants = () => {
  const siteData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          strings {
            covenants {
              sectionTitle
              sectionBody
              subsection {
                text
              }
              isVisible
            }
          }
        }
      }
    }
  `)
  const Covenants = siteData.site.siteMetadata.strings[0].covenants
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isNoResults, updateIsNoResults] = useState(false)

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }
  useEffect(() => {
    const results = Covenants.filter(covenant =>
      covenant.sectionTitle.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm])

  return (
    <Layout>
      <SearchBar
        placeHolderText={"Search Covenants"}
        value={setSearchTerm}
        handleOnChange={handleChange}
        id="Top"
      />
      <Content>
        {searchResults.map(covenant => (
          <>
            <CovenantHeading key={`${covenant.sectionTitle} + sectionTitle`}>
              {covenant.sectionTitle}
            </CovenantHeading>
            {covenant.sectionBody && (
              <SectionBody key={`${covenant.sectionBody} + sectionBody`}>
                {covenant.sectionBody}
              </SectionBody>
            )}
            {covenant.subsection &&
              covenant.subsection.map(section => (
                <SubsectionText key={section.text}>
                  {section.text}
                </SubsectionText>
              ))}
          </>
        ))}
        {isNoResults && <NoResults />}
      </Content>
    </Layout>
  )
}
export default Covenants
