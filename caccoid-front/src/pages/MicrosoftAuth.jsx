import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MicrosoftLogo from '../assets/microsoft-logo.svg';

const LoginLink = styled(Link)`
  text-decoration: underline;
  color: var(--medium-blue);

  &:hover {
    color: var(--light-grey);
  }
`;

const LoginTitle = styled.h2`
  color: var(--medium-blue);
  width: 100%;
  border-bottom: 2px solid var(--medium-blue);
  line-height: 1;
  font-family: var(--font-title);
`;

const OuterContainer = styled.div`
  max-width: 30vw;
  width: 100%;
  padding: 40px 20px;
  background-color: var(--white);
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
  background-color: var(--off-white);
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: var(--font-accent);
  font-size: 17px;
  margin: 20px 0;
  border-radius: 5px;
`;

const MicrosoftAuthButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-grey);
  color: var(--white);
  font-size: 26px;
  font-weight: 900;
  text-align: center;
  max-width: 50vw;
  height: 55px;
  font-family: var(--font-title);
  gap: 30px;
  margin: 20px 0;
  padding: 0 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const MicrosoftIcon = styled.img`
  width: 35px;
  display: flex;
  align-items: center;
`;

export default function MicrosoftAuth() {
  return (
    <OuterContainer>
      <LoginTitle>Entrar com conta institucional CEFET-RJ</LoginTitle>
      <MicrosoftAuthButton>
        <MicrosoftIcon src={MicrosoftLogo} alt="Microsoft Logo" />
        <p>MICROSOFT LOGIN</p>
      </MicrosoftAuthButton>
      <InnerContainer>
        <p>Olá, Calouro! Ainda não possui e-mail institucional?</p>
        <p>
          <LoginLink to="/email-auth">Crie uma conta ou faça login</LoginLink>{' '}
          com seu e-mail pessoal.
        </p>
      </InnerContainer>
    </OuterContainer>
  );
}
