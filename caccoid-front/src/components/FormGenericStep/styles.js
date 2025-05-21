import styled from 'styled-components';



export const FormStep = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  text-align: start;
  display: grid;
  grid-template-rows: 1fr;
`

export const Title = styled.h2`
  margin-bottom: 0;
  color: black;
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
`

export const FormGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
`

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const FormGroup = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
`

export const FormInputLabel = styled.p`
  color: black;
  margin-bottom: 0.25rem;
  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
  font-size: 1.2rem;

  & > span {
    color: #f04036;
  }
`

export const GenericInput = styled.input`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.5rem;
  color: black;
  background-color: white;
  border: 2px solid #d9d9d9;
  border-radius: 10px;
  width: 30vw;
  height: 3.5rem;
  padding-left: 0.8rem;
  font-size: 1.25rem;

  &:focus, hover {
    border: 2px solid #00aaff;
    outline: none;
  } 
    
  &::placeholder {
    color: #000000;
    opacity: 0.3;
    font-family: 'Roboto Mono', monospace;
    font-size: 1.25rem;
    padding-left: 0.8rem;
  }
`

export const GenericSelect = styled.select`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.25rem;
  color: black;
  background-color: white;
  border: 2px solid #d9d9d9;
  border-radius: 10px;
  width: 30vw;
  height: 3.5rem;
  padding-left: 0.8rem;

  &:focus, hover {
    border: 2px solid #00aaff;
    outline: none;
  }     
`

export const ErrorMessage = styled.span`
  color: #f04036;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.2rem;
`


export const DatePickerContainer = styled.div`
  .form-input {
    font-family: 'Roboto Mono', monospace;
    font-size: 1.5rem;
    color: black;
    background-color: white;
    border: 2px solid #d9d9d9;
    border-radius: 10px;
    width: 30vw;
    height: 3.5rem;
    padding-left: 0.8rem;
    font-size: 1.25rem;


    &:focus, hover {
      border: 2px solid #00aaff;
      outline: none;
    } 
    
    &::placeholder {
      color: #000000;
      opacity: 0.3;
      font-family: 'Roboto Mono', monospace;
      font-size: 1.25rem;
      padding-left: 0.8rem;
    }
  }
`