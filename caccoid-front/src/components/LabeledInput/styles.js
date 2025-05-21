import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--dark-grey);
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid
    ${({ hasError }) => (hasError ? 'var(--dark-red)' : 'var(--light-grey)')};
  border-radius: 4px;
  font-size: 1rem;
  outline: none;

  &::placeholder {
    font-family: var(--font-regular);
    font-size: 18px;
  }

  &:hover,
  &:focus {
    border-color: ${({ hasError }) => hasError ? 'var(--dark-red)' : 'var(--medium-blue)'};
  }
`;

export const ErrorMessage = styled.span`
  color: var(--dark-red);
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;
