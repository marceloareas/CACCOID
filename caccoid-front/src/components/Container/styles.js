import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 40px;
  background-color: ${(props) => props.color || 'var(--white)'};
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  margin: 20px;

  @media (max-width: var(--lg)) {
    width: 10vw;
  }
  @media (max-width: var(--md)) {
    width: 90vw;
  }
  @media (max-width: var(--sm)) {
    padding: 30px 15px;
  }
`;

export const CenteredContainer = styled(StyledContainer)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
