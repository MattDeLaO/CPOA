import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { BsArrowLeft } from "react-icons/bs"
import SEO from "../components/seo"

const SubmitButton = styled.button`
  background: #14293d;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
  color: white;
  padding: 20px;
  border-radius: 6px;
  border: 3px solid #cfe0ee;
  margin: 12px;
  min-width: 250px;
  :active {
    text-decoration: none;
  }
  :hover {
    text-decoration: none;
    background: white;
    color: #14293d;
    border: 4px solid #14293d;
  }
`
const StyledInput = styled.input`
  background: #f9f9f9;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background: #f4f6f6;
  :focus {
    background: white;
  }
`
const StyledForm = styled.form`
  min-height: 55vh;
  padding: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 5px;
  label {
    margin-right: 5px;
  }
`
const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  textarea {
    border: 1px solid black;
    border-radius: 4px;
    padding: 10px;
    margin: 4px;
    height: 20vh;
    background: #f4f6f6;
    :focus {
      background: white;
    }

    @media screen and (min-width: 320px) {
      width: 75vw;
    }
    @media screen and (min-width: 768px) {
      width: 50vw;
    }
    @media screen and (min-width: 1224px) {
      width: 35vw;
    }
  }
`
const Feedback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const NameEmailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  @media screen and (min-width: 320px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1224px) {
    flex-direction: row;
  }
`

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background: #14293d;
  color: white;
  border-top: 3px solid #cfe0ee;
`
const Header = styled.div`
  width: 100%;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;lang="en"
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  padding: 10px;
  background: #14293d;
  color: white;
  border-bottom: 3px solid #cfe0ee;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
  min-height: 80vh;
`

const SuccessMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  letter-spacing: 0.5px;
  color: white;
  text-align: center;
  background: #80d06e;
  border: 2px solid #4f8f00;
  border-radius: 4px;
`
const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  letter-spacing: 0.5px;
  color: white;
  text-align: center;
  background: #df5959;
  border: 2px solid #ab2121;
  border-radius: 4px;
`
const BackButton = styled(props => <Link {...props} />)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  color: white;
  width: 10vw;
  height: 9vh;
  a {
    text-decoration: none;
  }
  :hover {
    cursor: pointer;
  }
`
export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <>
        <SEO title="Contact Us" />
        <Header>
          <BackButton to="/">
            <BsArrowLeft size={20} />
          </BackButton>
          Contact Us
        </Header>

        <Content>
          <StyledForm
            onSubmit={this.submitForm}
            action="https://formspree.io/f/xgepjpkr"
            method="POST"
          >
            <NameEmailWrapper>
              <InputWrapper>
                <label>Name:</label>
                <StyledInput type="text " name="name" required />
              </InputWrapper>
              <InputWrapper>
                <label>Email:</label>
                <StyledInput type="email" name="email" required />
              </InputWrapper>
              <InputWrapper>
                <label>Phone #:</label>
                <StyledInput type="text" name="phoneNumber" />
              </InputWrapper>
            </NameEmailWrapper>

            <MessageWrapper>
              <label>Add your message below:</label>
              <textarea name="message"></textarea>
            </MessageWrapper>

            <Feedback>
              <>
                {status === "SUCCESS" ? (
                  <SuccessMessage>
                    Thanks for reaching out! We will respond as soon as
                    possible.
                  </SuccessMessage>
                ) : (
                  <SubmitButton>Submit</SubmitButton>
                )}
                {status === "ERROR" && (
                  <ErrorMessage>
                    Ooops! There was an error submitting your contact form.
                    Please try again later
                  </ErrorMessage>
                )}
              </>
            </Feedback>
          </StyledForm>
        </Content>

        <Footer />
      </>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
