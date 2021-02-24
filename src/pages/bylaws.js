import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/MainLayout"
import styled from "styled-components"

const ArticleHeading = styled.h3`
  background: grey;
`
const ArticleBody = styled.div``
const SectionHeading = styled.h5``
const ArticleSection = ({ text, sectionHeading }) => (
  <p>
    <SectionHeading>{sectionHeading}</SectionHeading>
    {text}
  </p>
)
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
          }
        }
      }
    }
  }
  `) 
  console.log(siteData);
  const BylawsArray = siteData.site.siteMetadata.strings[0].bylaws;
  console.log(BylawsArray);
  return (
  <Layout>
    {BylawsArray.map(article => (
      <>
      <ArticleHeading>{article.title}</ArticleHeading>
       {article.body && <ArticleBody>{article.body}</ArticleBody>}
       {article.sections && 
        article.sections.map(section => (
          <ArticleSection 
            sectionHeading={section.heading}
            text={section.text}
          />
        ))
       }
      </>
    ))}
     
  </Layout>
  );
}
export default Bylaws
