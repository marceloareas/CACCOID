import { useNavigate } from 'react-router-dom';
import addIcon from '../../assets/add-icon.svg';
import * as S from './styles';
import { CardUserOrder } from '../../components/CardUserOrder';

export default function UserHome() {
  const navigate = useNavigate();

  const data = true;

  if (!data) {
    return (
      <S.Container>
        <S.NewButton
          onClick={() => {
            navigate('/form');
          }}
        >
          <img src={addIcon} alt="Logo" sizes="24px" />
          <S.LabelButton>Solicitar carteirinha</S.LabelButton>
        </S.NewButton>

        <S.ContainerInfo>
          <S.NoContentTitle>
            Você não tem nenhuma solicitação realizada ainda.
          </S.NoContentTitle>
        </S.ContainerInfo>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.LabelPage>
        <S.LabelButton>Solicitação</S.LabelButton>
      </S.LabelPage>

      {data && (
        <CardUserOrder
          title={data?.name}
          date={data?.date}
          status={data?.status}
          isEditAvailable
        />
      )}
    </S.Container>
  );
}
