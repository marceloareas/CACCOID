import * as S from './styles';

export const CardUserOrder = ({
  className,
  alert,
  title,
  date,
  status,
  srcImg,
}) => {
  return (
    <S.CardContainer className={className}>
      <S.Image src={srcImg} alt="Logo" sizes="24px" />
      <S.ContentContainer>
        <S.Title>{title}</S.Title>
        <S.Date>{date}</S.Date>
        <S.Status status={status}>{status}</S.Status>
        {alert && <S.Alert>{alert}</S.Alert>}
      </S.ContentContainer>
    </S.CardContainer>
  );
};
