import React, { useState } from "react"
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
const SubsectionText = styled.div``
const Content = styled.div`
  padding: 5%;
  min-height: 80vh;
`
const renderCovenantComponent = (covenant, index) => {
  console.log(covenant)
  return (
    covenant.isVisible && (
      <>
        <CovenantHeading key={index}>{covenant.sectionTitle}</CovenantHeading>
        {covenant.sectionBody && (
          <SectionBody key={index}>{covenant.sectionBody}</SectionBody>
        )}
        {covenant.subsection &&
          covenant.subsection.map(section => (
            <SubsectionText key={index}>{section.text}</SubsectionText>
          ))}
      </>
    )
  )
}

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
  const CovenantsArray = siteData.site.siteMetadata.strings[0].covenants
  const [searchText, updateSearchText] = useState("")
  const [isNoResults, updateIsNoResults] = useState(false)

  const handleOnChange = e => {
    updateSearchText(e.target.value)
    const sanitizedText = searchText.toLowerCase()
    let isNoResults = true

    CovenantsArray.forEach(entry => {
      if (!searchText) {
        entry.isVisible = true
        isNoResults = false
      } else {
        entry.isVisible = entry.sectionTitle
          .toLowerCase()
          .includes(sanitizedText)
        if (isNoResults) {
          isNoResults = !entry.isVisible
        }
      }
    })
    updateIsNoResults(isNoResults)
  }

  return (
    <Layout>
      <SearchBar
        placeHolderText={"Search Covenants"}
        searchText={searchText}
        handleOnChange={handleOnChange}
      />
      <Content>
        {CovenantsArray.map((covenant, index) =>
          renderCovenantComponent(covenant, index)
        )}
        {isNoResults && <NoResults />}
      </Content>
    </Layout>
  )
}
export default Covenants
