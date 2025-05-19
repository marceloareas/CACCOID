import styled from 'styled-components';

const getColor = (variant) => {
  switch (variant) {
    case 'pendente':
      return '#F04036';
    case 'em_analise':
      return 'var(--medium-yellow)';
    case 'autorizada':
      return 'var(--medium-green)';
    default:
      return 'var(--black)';
  }
};

export const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: var(--white);
  padding: 25px 50px;
  width: 100%;

  width: 80%;
  min-width: 800px;
  height: 200px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Image = styled.img`
  height: 150px;
  width: 100px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

export const InfoText = styled.span`
  font-family: var(--font-regular);
  font-size: 16px;
`;

export const InfoLabel = styled.span`
  font-family: var(--font-regular);
  font-size: 16px;
  color: var(--light-grey);
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Status = styled.div`
  display: flex;
  font-family: var(--font-regular);
  font-size: 14px;
  background-color: #ededed;
  border-radius: 10px;
  padding: 5px;
  min-width: 200px;
  max-height: 20px;
  align-items: center;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ status }) => getColor(status)};
    margin-right: 5px;
  }
`;

export const AlertContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
`;

export const CardActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 90px;
  align-items: flex-end;

  button {
    max-width: 200px;
    width: 200px;
  }
`;
