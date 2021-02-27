import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/MainLayout"
import styled from "styled-components"
import { BsSearch } from "react-icons/bs"
import { NoResults } from '../components/NoResults'

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
const SectionWrapper = styled.div``
const SectionText = styled.p`
  text-indent: 3em;
  margin-top: 10px;
  margin-bottom: 15px;
`

const SearchBar = styled.input`
padding-left: 10px;
margin: 10px;
  :focus {
    outline: none;
  }
`
const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const renderBylawComponent = article => (
  <>
    {article.isVisible && (
      <>
        <Heading>{article.title}</Heading>
        <Body>{article.body}</Body>
        {article.sections &&
          article.sections.map(section => (
            <SectionWrapper>
              <SectionHeading>{section.heading}</SectionHeading>
              <SectionText>{section.text}</SectionText>
            </SectionWrapper>
          ))}
      </>
    )}
  </>
)
const Content = styled.div`
  padding: 5%;
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
  const BylawsArray = siteData.site.siteMetadata.strings[0].bylaws
  const [searchText, updateSearchText] = useState("")
  const [isNoResults, updateIsNoResults] = useState(false)
  const [bylawState, updateBylawState] = useState(BylawsArray)

  const handleOnChange = e => {

    updateSearchText(e.target.value)

    const sanitizedText = searchText.toLowerCase()
    let isNoResults = true

    bylawState.forEach(entry => {
      if (!searchText) {
        entry.isVisible = true
        isNoResults = false
      } else {
        entry.isVisible = entry.title.toLowerCase().includes(sanitizedText)
        if (isNoResults) {
          isNoResults = !entry.isVisible
        }
      }
    })
    updateIsNoResults(isNoResults)
  }

  return (
    <Layout>
      <SearchBarWrapper>
        <BsSearch />
        <SearchBar
          type="text"
          value={searchText}
          onChange={handleOnChange}
          placeholder="Search Bylaws"
        />
      </SearchBarWrapper>
      <Content>
        {bylawState.map(article => renderBylawComponent(article))}
        {isNoResults && <NoResults/>}
      </Content>
    </Layout>
  )
}
export default Bylaws
