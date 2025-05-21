import styled from "styled-components";


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
export const ErrorMessage = styled.span`
  color: #f04036;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.2rem;
`

export const Checkbox = styled.div`
  display: inline-block;
  margin-bottom: 20px;
`
export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: black;
  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 1rem;
`

export const DocumentInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  color: black;
  opacity: 0.5;
  background-color: white;
  border: 2px solid #d9d9d9;
  border-radius: 10px;
  width: 35vw;
  height: 3.2rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  margin-bottom: 0.3rem;
`

export const DocumentInput = styled.input`
  opacity: 0;
  inset: 0;
  position: absolute;
  height: 100%;
  width: 100%;
`
export const DocumentIcon = styled.img`
  width: 2rem;
  height: 2rem;
`

export const LocationInput = styled.select`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.2rem;
  color: black;
  background-color: white;
  border: 2px solid #d9d9d9;
  border-radius: 10px;
  width: 30vw;
  height: 3rem;
  padding-left: 0.8rem;

  &:hover {
    border: 2px solid #00aaff;
    outline: none;
  }
`

export const UploadInputGrid = styled.div`
  display: grid;
  place-content: center;
`

export const UploadInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  fill: white;
  cursor: pointer;
  position: relative;
  padding: 8rem;
  border: 2px dashed #00aaff;
  border-radius: 4px;
  color: black;
  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
`

export const UploadIconContainer = styled.div`
  background-color: #00aaff;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  & > img { 
    width: 3rem;
    height: 3rem;
    object-fit: contain;
  } 
`

export const UploadInput = styled.input`
  opacity: 0;
  inset: 0;
  position: absolute;
  height: 100%;
  width: 100%;
`


/*   
.image-crop-container {
  margin-top: 20px;
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
}

.crop-area {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
} */

// button:disabled {
//   opacity: 0.6;
//   cursor: not-allowed;
// }



