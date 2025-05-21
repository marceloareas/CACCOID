import styled, { keyframes } from 'styled-components';

export const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  margin: 40px auto;
  border: 6px solid #eee;
  border-top: 6px solid var(--medium-blue);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingText = styled.div`
  margin-top: 16px;
  font-family: var(--font-regular);
  font-size: 18px;
  color: var(--medium-blue);
  text-align: center;
`;
