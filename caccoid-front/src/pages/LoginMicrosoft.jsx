import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MicrosoftLogo from "../assets/microsoft-logo.svg";

const LoginLink = styled(Link)`
  text-decoration: none;
  color: #185395;
  font-weight: bold;
  text-decoration: underline;
  &:hover {
    color: #6e6e6e;
  }
`;

const LoginTitle = styled.h2`
  color: #185395;
  width: 100%;
  border-bottom: 2px solid #185395;
  line-height: 1;
`;

const OuterContainer = styled.div`
  max-width: 30vw;
  width: 100%;
  padding: 40px 20px;
  background-color: #ffffff;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;

const InnerContainer = styled.div`
  width: 70%;
  padding: 30px;
  background-color: #f4f4f4;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: var(--font-secondary-title);
  font-size: 17px;
  margin: 20px 0;
  border-radius: 5px;
`;

const MicrosoftLoginButton = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  background-color: #383838;
  color: #ffffff;
  font-size: 26px;
  font-weight: 900;
  text-align: center;
  max-width: 50vw;
  max-height: 55px;
  font-family: var(--font-title);
  gap: 30px;
  margin: 20px 0;
  padding: 0px 20px;
  border-radius: 5px;
`;

const MicrosoftIcon = styled.img`
  width: 35px;
  display: flex;
  align-items: center;
`;

export default function LoginMicrosoft() {
  return (
    <OuterContainer>
      <LoginTitle>Entrar com conta institucional CEFET-RJ</LoginTitle>
      <MicrosoftLoginButton>
        <MicrosoftIcon src={MicrosoftLogo} alt="Microsoft Logo" />
        <p>MICROSOFT LOGIN</p>
      </MicrosoftLoginButton>
      <InnerContainer>
        <p>Olá, Calouro! Ainda não possui e-mail institucional?</p>
        <p>
          <LoginLink to="/login">Crie uma conta ou faça login</LoginLink> com
          seu e-mail pessoal.
        </p>
      </InnerContainer>
    </OuterContainer>
  );
}
