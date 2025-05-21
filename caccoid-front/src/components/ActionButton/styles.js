import styled from 'styled-components';

const getColor = (variant) => {
  switch (variant) {
    case 'primary':
      return 'var(--dark-blue)';
    case 'secondary':
      return 'var(--medium-blue)';
    case 'tertiary':
      return 'var(--dark-grey)';
    case 'quaternary':
      return 'var(--light-grey)';
    case 'danger':
      return 'var(--dark-red)';
    default:
      return 'var(--dark-blue)';
  }
};

export const Button = styled.button`
  display: flex;
  justify-content: ${(props) => (props.iconSrc ? 'space-between' : 'center')};
  align-items: center;

  padding: 0 10px;
  width: ${(props) => (props.size === 'small' ? 'fit-content' : 'auto')};
  min-width: ${(props) => (props.size === 'small' ? '20px' : '120px')};
  max-width: ${(props) => (props.size === 'large' ? '182px' : 'auto')};
  height: 44px;
  border-radius: 5px;
  border: none;

  color: ${(props) => (props.disabled ? 'var(--black)' : 'var(--white)')};
  background-color: ${(props) =>
    props.disabled ? 'var(--light-grey)' : getColor(props.variant)};

  cursor: ${(props) => (props.disabled ? 'prohibited' : 'pointer')};

  font-family: 'Bebas Neue', sans-serif;
  font-size: ${(props) => (props.size === 'small' ? '10px' : '24px')};
  font-weight: 400;
`;
