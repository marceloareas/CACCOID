import addIcon from '../../assets/add-icon.svg';
import * as S from './styles';

export default function UserHome() {
  return (
      <S.Container>
        <S.NewButton>
          <img src={addIcon} alt="Logo" sizes="24px" />
          <label>Solicitar carteirinha</label>
        </S.NewButton>

        <S.ContainerInfo>
          <S.NoContentTitle>
            Você não tem nenhuma solicitação realizada ainda.
          </S.NoContentTitle>
        </S.ContainerInfo>
      </S.Container>
  );
}
