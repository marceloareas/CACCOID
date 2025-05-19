import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 3rem;
  overflow-x: auto;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 3rem 0;
  }
`;

export const ProgressStep = styled.div`
  background-color: ${({ completed }) =>
    completed === 'completed' ? '#00aaff' : 'var(--lightest-grey)'};
  border: ${({ step }) => (step === 'active' ? '2px solid #00aaff' : 'none')};
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  flex-shrink: 0;

  @media screen and (max-width: 600px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const StepIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  object-fit: contain;

  @media screen and (max-width: 600px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const ProgressLine = styled.div`
  height: 4px;
  background-color: ${({ completed }) =>
    completed === 'completed' ? '#00aaff' : '#e0e0e0'};
  flex-grow: 1;
  align-self: center;

  @media screen and (max-width: 600px) {
    width: 4px;
    height: 3rem;
  }
`;
