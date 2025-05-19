import styled from 'styled-components';

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

  &:focus,
  hover {
    border: 2px solid #00aaff;
    outline: none;
  }

  &::placeholder {
    color: #000000;
    opacity: 0.3;
    font-family: 'Roboto Mono', monospace;
    font-size: 1.5rem;
    padding-left: 0.8rem;
  }
`;
