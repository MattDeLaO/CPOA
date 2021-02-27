import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/MainLayout"
import styled from "styled-components"

const ArticleHeading = styled.h3`
  color: white;
  letter-spacing: 1px;
  background: #14293D;
  padding: 5px;
  border-radius: 4px;
`
const SectionBody = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;
  text-indent: 2em;
`
const SectionHeading = styled.h5``
const ArticleSection = ({ text, sectionHeading }) => (
  <>
    <SectionHeading>{sectionHeading}</SectionHeading>
    {text}
  </>
)
const Content = styled.div`
padding: 5%;
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
            }
          }
        }
      }
    }
  `)
  const CovenantsArray = siteData.site.siteMetadata.strings[0].covenants
  return (
    <Layout>
      <Content>
        {CovenantsArray.map(covenant => (
          <>
            <ArticleHeading>{covenant.sectionTitle}</ArticleHeading>
            {covenant.sectionBody && (
              <SectionBody>{covenant.sectionBody}</SectionBody>
            )}
            {covenant.subsection &&
              covenant.subsection.map(section => (
                <ArticleSection text={section.text} />
              ))}
          </>
        ))}
      </Content>
    </Layout>
  )
}
export default Covenants
