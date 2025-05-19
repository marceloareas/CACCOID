import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import UnderlinedTitle from '../components/UnderlinedTitle';
import { ActionButton } from '../components/ActionButton';
import MicrosoftLogo from '../assets/microsoft-logo.svg';
import LabeledInput from '../components/LabeledInput';
import { ErrorMessage } from '../components/LabeledInput/styles';

const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const StyledH3 = styled.h3`
  color: var(--white);
  margin: 1rem;
  flex: 1;
`;

const MicrosoftIcon = styled.img`
  height: 20px;
  width: 30px;
  scale: 1.4;
  margin-right: 10px;
  align-self: center;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 1rem;
  flex: 0;
  white-space: nowrap;
`;

const BlueContainerDiv = styled.div`
  justify-content: center;
  display: flex;
`;

export default function EmailAuth() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [setPasswordError] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Chamar a API depois
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerPassword !== confirmPassword) {
      setPasswordError('As senhas não coincidem');
      return;
    } else {
      setPasswordError('');
    }
    // Chamar a API depois
  };

  return (
    <>
      <BlueContainerDiv>
        <Container variant="blueRow">
          <StyledH3>
            Tenha sua carteirinha de estudante com praticidade!
            <br />
            <strong>Acesse com seu e-mail institucional do CEFET-RJ:</strong>
          </StyledH3>
          <StyledDiv>
            <ActionButton variant="quaternary">
              <MicrosoftIcon src={MicrosoftLogo} />
              FAÇA LOGIN COM CONTA MICROSOFT
            </ActionButton>
          </StyledDiv>
        </Container>
      </BlueContainerDiv>

      <ContainerWrapper>
        <Container>
          <UnderlinedTitle color="var(--light-grey)">
            Faça login com seu e-mail pessoal
          </UnderlinedTitle>
          <form onSubmit={handleLoginSubmit}>
            <LabeledInput
              title="E-mail"
              placeholder="Digite seu e-mail"
              type="email"
              value={loginEmail}
              onChange={(val) => setLoginEmail(val)}
            />
            <LabeledInput
              title="Senha"
              placeholder="Digite sua senha"
              type="password"
              value={loginPassword}
              onChange={(val) => setLoginPassword(val)}
            />
            <ActionButton variant="tertiary" type="submit">
              LOGIN
            </ActionButton>
          </form>
        </Container>

        <Container>
          <UnderlinedTitle color="var(--light-grey)">
            Crie uma conta com seu e-mail pessoal
          </UnderlinedTitle>
          <form onSubmit={handleRegisterSubmit}>
            <LabeledInput
              title="E-mail"
              placeholder="Digite seu e-mail"
              type="email"
              value={registerEmail}
              onChange={(val) => setRegisterEmail(val)}
            />
            <LabeledInput
              title="Senha"
              placeholder="Digite sua senha"
              type="password"
              value={registerPassword}
              onChange={(val) => setRegisterPassword(val)}
            />
            <LabeledInput
              title="Confirme sua senha"
              placeholder="Confirme sua senha"
              type="password"
              value={confirmPassword}
              onChange={(val) => setConfirmPassword(val)}
              confirmPassword
              password={registerPassword}
            />
            <ActionButton variant="tertiary" type="submit">
              REGISTRE-SE
            </ActionButton>
          </form>
        </Container>
      </ContainerWrapper>
    </>
  );
}
