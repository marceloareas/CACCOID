import React from 'react';
import { Title } from './styles';

const UnderlinedTitle = ({ children, color = 'var(--medium-blue)' }) => {
  return <Title color={color}>{children}</Title>;
};

export default UnderlinedTitle;
