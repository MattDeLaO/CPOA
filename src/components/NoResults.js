import React from "react"
import styled from "styled-components"

const NoResultsWrapper = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const NoResults = () => (
  <NoResultsWrapper>No results found for your search.</NoResultsWrapper>
)
