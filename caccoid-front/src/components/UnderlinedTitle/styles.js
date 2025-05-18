import styled from 'styled-components';

export const Title = styled.h2`
  color: ${({ color }) => color};
  width: 100%;
  border-bottom: 2px solid ${({ color }) => color};
  line-height: 1;
  font-family: var(--font-title);
  margin: 20px;
`;
