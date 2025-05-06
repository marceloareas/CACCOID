import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/cacco-logo.png";

const Nav = styled.nav`
  background-color: #0c3561;
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 70px;
  position: fixed;
  padding: 0 20px;
  top: 0;
  left: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  &:hover {
    color: #6e6e6e;
  }
`;

const Logo = styled.img`
  height: 55px;
`;

const NavTitle = styled.h1`
  color: #ffffff;
  font-size: 52px;
  display: flex;
  align-items: center;
`;

const LogoAndTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  max-height: 70px;
`;

export default function Navbar() {
  return (
    <Nav>
      <NavLink to="/">
        <LogoAndTitle>
          <Logo src={logo} alt="Cacco Logo" />
          <NavTitle>CACCOID</NavTitle>
        </LogoAndTitle>
      </NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/login-microsoft">Login Microsoft</NavLink>
    </Nav>
  );
}
