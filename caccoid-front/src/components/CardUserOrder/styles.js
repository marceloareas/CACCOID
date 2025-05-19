import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--white);
  padding: 20px 10px;
  width: 100%;
  max-width: 1000px;
`;

export const Image = styled.img`
  height: 150px;
  width: 100px;
`;

export const Title = styled.h2`
  font-family: var(--font-title);
  font-size: 24px;
  color: var(--dark-blue);
  margin: 10px 0;
`;

export const Date = styled.p`
  font-family: var(--font-regular);
  font-size: 16px;
  color: var(--dark-grey);
  margin: 5px 0;
`;

export const Status = styled.p`
  font-family: var(--font-regular);
  font-size: 16px;
  color: ${({ status }) =>
    status === 'completed' ? 'var(--medium-green)' : 'var(--dark-red)'};
  margin: 5px 0;
`;

export const Alert = styled.p`
  font-family: var(--font-regular);
  font-size: 16px;
  color: var(--dark-red);
  margin: 5px 0;
`;
