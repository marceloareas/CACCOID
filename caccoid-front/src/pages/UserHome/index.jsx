import { useNavigate } from 'react-router-dom';
import addIcon from '../../assets/add-icon.svg';
import * as S from './styles';
import { CardUserOrder } from '../../components/CardUserOrder';
import ContactForm from '../../components/ContactForm';
import ToastAlert from '../../components/ToastAlert';
import { useDetailOrder } from '../../hooks/useDetailOrder';
import Loading from '../../components/Loading';

export default function UserHome() {
  const navigate = useNavigate();
  const alertToast = true;
  const { data, loading } = useDetailOrder();

  if (loading) {
    return <Loading />;
  }

  if (!data || !loading) {
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
      <S.HeaderPage>
        <S.ToastArea>
          {alertToast && (
            <ToastAlert alertMessage="Sua última solicitação foi indeferida, faça um novo pedido!" />
          )}
        </S.ToastArea>
        <S.LabelPage>
          <S.LabelButton>Solicitação</S.LabelButton>
        </S.LabelPage>
      </S.HeaderPage>

      {data && (
        <CardUserOrder
          title={data?.studentName}
          date={data?.requestDate}
          status={data?.status}
          isEditAvailable
        />
      )}
      <ContactForm />
    </S.Container>
  );
}
