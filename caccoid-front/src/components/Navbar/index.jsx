import * as S from './styles';
import logo from '../../assets/cacco-logo.png';
import userIcon from '../../assets/user-icon.svg';
import { ActionButton } from '../ActionButton';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { userName, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      logout();
      toast.success('Logout realizado com sucesso');
      navigate('/microsoft-auth');
    } catch (error) {
      toast.error(error.message || 'Erro ao realizar logout');
    }
  };

  return (
    <S.NavbarContainer>
      <S.NavbarLeft>
        <S.HomeLink to="/">
          <S.Logo src={logo} alt="CACCO Logo" />
          <S.NavbarTitle>CACCO ID</S.NavbarTitle>
        </S.HomeLink>
      </S.NavbarLeft>
      <S.NavbarRight>
        {userName && (
          <>
            <S.UserIcon src={userIcon} alt="Usuário" />
            <S.UserName>{userName}</S.UserName>
            <ActionButton variant="danger" onClick={handleLogout}>
              Logout
            </ActionButton>
          </>
        )}
      </S.NavbarRight>
    </S.NavbarContainer>
  );
};

export default Navbar;
