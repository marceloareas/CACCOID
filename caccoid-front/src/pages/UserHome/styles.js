import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
`;

export const HeaderPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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
  height: 92px;

  cursor: pointer;
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);

  width: 80%;
  min-width: 800px;
  height: 200px;
`;

export const NoContentTitle = styled.h1`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 20px;
  font-weight: 200;
  color: var(--black);
  text-align: center;
`;

export const LabelPage = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 20px;
  background-color: var(--dark-blue);
  color: var(--white);
  border: none;

  min-width: 280px;
  max-width: 280px;
  height: 92px;
`;

export const LabelButton = styled.label`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 32px;
  font-weight: 200;
`;
export const ToastArea = styled.div``;
