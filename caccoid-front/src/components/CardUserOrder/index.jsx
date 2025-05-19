import * as S from './styles';
import userDefault from '../../assets/user-default.jpg';
import alertIcon from '../../assets/alert-red-icon.svg';
import editIcon from '../../assets/edit-icon.svg';
import { ActionButton } from '../ActionButton';

export const CardUserOrder = ({
  className,
  title = 'Aluno',
  date,
  status,
  srcImg,
  isEditAvailable = false,
}) => {
  return (
    <S.CardContainer className={className}>
      <S.Content>
        <S.Image src={srcImg ?? userDefault} alt="" sizes="24px" />
        <S.InfoContainer>
          <S.InfoText>{title}</S.InfoText>
          <S.InfoItem>
            <S.InfoLabel>Data do pedido</S.InfoLabel>
            <S.InfoText>{date}</S.InfoText>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoLabel>Status</S.InfoLabel>
            <S.Status status={status}>
              <span />
              {status}
            </S.Status>
          </S.InfoItem>
        </S.InfoContainer>
      </S.Content>
      <S.CardActions>
        {isEditAvailable && (
          <S.AlertContainer>
            <span>
              Foi encontrada inconsistência nos dados enviados, edite a
              solicitação!
            </span>
            <img src={alertIcon} sizes="20px" />
          </S.AlertContainer>
        )}
        {isEditAvailable && (
          <ActionButton
            onClick={() => {
              console.log('Editar');
            }}
            iconSrc={editIcon}
          >
            Editar
          </ActionButton>
        )}
      </S.CardActions>
    </S.CardContainer>
  );
};
