import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 150px;
`;

export const NewButton = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 20px;
  background-color: var(--medium-green);
  color: var(--white);
  border: none;
  min-width: 320px;
  height: 92px;

  font-family: 'Bebas Neue', sans-serif;
  font-size: 32px;
  font-weight: 200;
  max-width: 200px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
`;

export const NoContentTitle = styled.h1`
  font-family: 'Roboto Mono', monospace;
  font-size: 20px;
  font-weight: 200;
  color: var(--black);
  text-align: center;
  margin-top: 50px;
`;
