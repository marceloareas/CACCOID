import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: stretch;
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledH3 = styled.h3`
  color: var(--white);
  margin: 1rem;
  flex: 1;
`;

export const MicrosoftIcon = styled.img`
  height: 20px;
  width: 30px;
  scale: 1.4;
  margin-right: 10px;
  align-self: center;
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 1rem;
  flex: 0;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const BlueContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    text-align: center;
  }
`;
