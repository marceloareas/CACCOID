import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
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

export const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  margin-right: 2rem;

  &:hover {
    color: #fbe540;
  }
`;

export const Logo = styled.img`
  height: 100%;
  max-height: 60px;
  margin-right: 8px;
`;

export const NavbarTitle = styled.span`
  font-family: var(--font-title);
  font-size: 3rem;
  letter-spacing: 1px;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

export const UserIcon = styled.img`
  height: 2.5em;
  width: 2.5em;
  border-radius: 50%;
  margin-right: 0.6rem;
  background-color: white;
  object-fit: cover;
`;

export const UserName = styled.span`
  font-family: var(--font-accent);
  font-weight: 700;
  font-size: 1.25rem;
  margin-right: 1rem;

`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  margin-right: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #fbe540;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 0.3rem 0.8rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 1rem;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    background-color: #fbe540;
    color: var(--dark-blue);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
