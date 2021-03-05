import React from "react"
import styled from "styled-components"

const StyledCopy = styled.div`
@media screen and (min-width: 320px) {
    font-size: 5;
  } 
  @media screen and (min-width: 768px) {
    font-size: 12;
  }
  @media screen and (min-width: 1224px) {
    font-size: 14;
  }
`
export const Copyright = () => (
  <StyledCopy>&copy; Coblestone Property Owner's Association 2021</StyledCopy>
)
