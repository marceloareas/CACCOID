import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: var(--medium-blue);

  &:hover {
    color: var(--light-grey);
  }
`;

export const MicrosoftIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  vertical-align: middle;
`;

export const StyledH3 = styled.h3`
  text-align: center;
`;
