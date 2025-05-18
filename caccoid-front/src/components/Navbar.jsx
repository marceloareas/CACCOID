import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/cacco-logo.png';
import userIcon from '../assets/user-icon.svg';

const NavbarContainer = styled.nav`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: var(--dark-blue);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
  z-index: 3;
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  margin-right: 2rem;

  &:hover {
    color: #fbe540;
  }
`;

const Logo = styled.img`
  height: 100%;
  max-height: 60px;
  margin-right: 8px;
`;

const NavbarTitle = styled.span`
  font-family: var(--font-title);
  font-size: 2rem;
  letter-spacing: 1px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

const UserIcon = styled.img`
  height: 2.5em;
  width: 2.5em;
  border-radius: 50%;
  margin-right: 0.6rem;
  background-color: white;
  object-fit: cover;
`;

const UserName = styled.span`
  font-family: var(--font-accent);
  font-weight: 700;
  font-size: 1.25rem;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  margin-right: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #fbe540;
  }
`;

const Navbar = () => {
  const [userName, setUserName] = useState('Aluno');

  return (
    <NavbarContainer>
      <NavbarLeft>
        <HomeLink to="/">
          <Logo src={logo} alt="CACCO Logo" />
          <NavbarTitle>CACCO ID</NavbarTitle>
        </HomeLink>
        <NavLinks>
          <NavbarLink to="/form">Form</NavbarLink>
          <NavbarLink to="/microsoft-auth">Microsoft Auth</NavbarLink>
          <NavbarLink to="/email-auth">Email Auth</NavbarLink>
        </NavLinks>
      </NavbarLeft>
      <NavbarRight>
        <UserIcon src={userIcon} alt="Usuário" />
        <UserName>{userName}</UserName>
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;
