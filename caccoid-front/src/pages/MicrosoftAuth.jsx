import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MicrosoftLogo from '../assets/microsoft-logo.svg';
import Container from '../components/Container';
import UnderlinedTitle from '../components/UnderlinedTitle';
import { ActionButton } from '../components/ActionButton';

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: var(--medium-blue);

  &:hover {
    color: var(--light-grey);
  }
`;

const MicrosoftIcon = styled.img`
  width: 25px;
  margin-right: 10px;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledH3 = styled.h3`
  text-align: center;
`;

export default function MicrosoftAuth() {
  return (
    <Container centered>
      <UnderlinedTitle color="var(--medium-blue)">
        Entrar com conta institucional CEFET-RJ
      </UnderlinedTitle>
      <ActionButton variant="tertiary">
        <StyledDiv>
          <MicrosoftIcon src={MicrosoftLogo} /> MICROSOFT LOGIN
        </StyledDiv>
      </ActionButton>
      <Container color="var(--off-white)">
        <StyledH3>Olá, Calouro! Ainda não possui e-mail institucional?</StyledH3>
        <StyledH3>
          <StyledLink to="/email-auth">Crie uma conta ou faça login</StyledLink> com seu e-mail
          pessoal.
        </StyledH3>
      </Container>
    </Container>
  );
}
