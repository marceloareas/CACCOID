import React from 'react';
import { StyledContainer, CenteredContainer, BlueRowContainer } from './styles';

/**
 * @param {object} props
 * @param {'default' | 'centered' | 'blueRow'} props.variant
 */

const Container = ({ variant = 'default', color, children }) => {
  let Component;

  switch (variant) {
    case 'centered':
      Component = CenteredContainer;
      break;
    case 'blueRow':
      Component = BlueRowContainer;
      break;
    case 'default':
    default:
      Component = StyledContainer;
      break;
  }

  return <Component color={color}>{children}</Component>;
};

export default Container;
