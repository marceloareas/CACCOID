import React from 'react';
import { StyledContainer, CenteredContainer } from './styles';

const Container = ({ color, centered = false, children }) => {
  const Component = centered ? CenteredContainer : StyledContainer;

  return <Component color={color}>{children}</Component>;
};

export default Container;
