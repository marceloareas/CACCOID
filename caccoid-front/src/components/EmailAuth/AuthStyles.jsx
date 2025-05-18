import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const OuterContainer = styled.div`
  max-width: 40vw;
  width: 100%;
  padding: 40px 20px;
  background-color: #ffffff;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;

export const AuthTitle = styled.h2`
  color: #6e6e6e;
  width: 100%;
  border-bottom: 2px solid #6e6e6e;
  line-height: 1;
  margin-bottom: 10px;
`;

export const AuthLink = styled(Link)`
  text-decoration: none;
  color: #6e6e6e;
  font-weight: bold;
  text-decoration: underline;
  &:hover {
    color: #6e6e6e;
  }
`;

export const AuthButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #383838;
  color: #ffffff;
  font-size: 26px;
  text-align: center;
  max-width: 50vw;
  max-height: 55px;
  font-family: var(--font-title);
  gap: 30px;
  margin: 20px 0;
  padding: 0px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #484848;
  }
`;

export const AuthInput = styled.input`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding: 0 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &::placeholder {
    font-size: 14px;
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #6e6e6e;
    box-shadow: 0 0 0 2px rgba(110, 110, 110, 0.2);
  }
`;

export const AuthContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 33.333%;
  max-width: 400px;
`;

export const LoginContainer = styled(AuthContainer)`
  left: 66%;
`;

export const RegisterContainer = styled(AuthContainer)`
  left: 33%;
`;
