import LoginComponent from '../components/EmailAuth/LoginComponent';
import RegisterComponent from '../components/EmailAuth/RegisterComponent';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const MicrosoftBanner = styled.div`
  background-color: #003366;
  color: white;
  padding: 1.5rem 2rem;
  margin: 2rem auto;
  width: 90%;
  max-width: 800px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.4;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  a {
    background-color: white;
    color: #000;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 2px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      background-color: #f1f1f1;
    }

    img {
      height: 20px;
    }
  }
`;

const LoginLink = styled(Link)`
  text-decoration: underline;
  color: var(--medium-blue);

  &:hover {
    color: var(--light-grey);
  }
`;

export default function Login() {
  return (
    <div>
      {/*
      <MicrosoftBanner>
        <span>
          Tenha sua carteirinha de estudante com praticidade! <br />
          <strong>Acesse com seu e-mail institucional do CEFET-RJ:</strong>
        </span>
        <LoginLink to="/microsoft-auth">
          <img src="/microsoft-icon.png" alt="Microsoft" />
          FAÇA LOGIN COM CONTA MICROSOFT
        </LoginLink>
      </MicrosoftBanner>
  */}
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <LoginComponent />
        <RegisterComponent />
      </div>
    </div>
  );
}
