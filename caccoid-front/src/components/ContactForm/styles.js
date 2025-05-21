import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 80%;
`;

export const Legend = styled.legend`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #aaa;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #aaa;
  border-radius: 4px;
  resize: none;
  box-sizing: border-box;
`;

export const SubmitButton = styled.button`
  background-color: #1955a6;
  color: white;
  padding: 10px 20px;
  border: none;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #15488b;
  }
`;

export const ErrorMsg = styled.p`
  color: red;
  font-size: 13px;
  margin-top: 4px;
`;
