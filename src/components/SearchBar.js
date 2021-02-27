import React from "react"
import styled from "styled-components"
import { BsSearch } from "react-icons/bs"

const SearchBarInput = styled.input`
  padding-left: 10px;
  width: 70%;
  :focus {
    outline: none;
  }
`
const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  border: 1px solid #14293d;
  margin: 5px;
  padding-left: 5px;
`
const SearchBarSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
`

const SearchBar = ({ searchText, handleOnChange, placeHolderText }) => {
  return (
    <SearchBarSection>
      <SearchBarWrapper>
        <BsSearch />
        <SearchBarInput
          type="text"
          value={searchText}
          onChange={handleOnChange}
          placeholder={placeHolderText}
        />
      </SearchBarWrapper>
    </SearchBarSection>
  )
}

export default SearchBar
