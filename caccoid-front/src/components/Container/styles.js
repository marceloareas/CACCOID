import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 40px;
  margin-top: 20px;
  background-color: ${(props) => props.color || 'var(--white)'};
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  width: 40vw;

  > div {
    width: 90%;
  }

  @media (max-width: ${({ theme }) =>
    theme.breakpoints.lg}) and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 70vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 90vw;
  }
`;

export const CenteredContainer = styled(StyledContainer)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BlueRowContainer = styled(StyledContainer)`
  background-color: var(--dark-blue);
  flex-direction: row;
  gap: 1rem;
  color: var(--white);
  width: 90%;
  padding: 5px;
`;
