import React from 'react';
import hooks from '../../hooks';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  hooks.useOnLocationChange();

  return <React.Fragment>{children}</React.Fragment>;
};

export default Container;
