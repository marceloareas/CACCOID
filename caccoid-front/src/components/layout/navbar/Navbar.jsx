import { useState } from 'react';
import './styles.css';
import logo from '../../../assets/logo.svg';
import userIcon from '../../../assets/user-icon.svg';


export const Navbar = () => {
    const [userName, setUserName] = useState('Aluno');

    
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="CACCO Logo" className="logo" />
        <span>CACCO ID</span>
      </div>
      <div className="navbar-right">
        <img src={userIcon} alt="Usuário" className="user-icon" />
        <span>{userName}</span>
      </div>
    </nav>
  );
};
