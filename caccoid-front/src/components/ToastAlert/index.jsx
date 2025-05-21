import alertIcon from '../../assets/alert-icon.svg';
import * as S from './styles';

export default function ToastAlert({ alertMessage }) {
  return (
    <S.ToastWrapper>
      <S.ToastContainer>
        <img src={alertIcon} alt="" /> {alertMessage}
      </S.ToastContainer>
    </S.ToastWrapper>
  );
}
