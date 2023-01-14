import React from 'react';
import styled from 'styled-components';
import { hex2rgba } from '../../styled/abstract/mixins';

export interface IExitProps {}

export const Svg = styled.svg`
  background-color: ${hex2rgba({ hex: '#333333', alpha: 0.5 })};
  padding: 0.4rem;
`;

export const Path = styled.path``;

export const G = styled.g``;

export const Stop = styled.stop``;

const Exit: React.FC<IExitProps> = (): JSX.Element => {
  return (
    <Svg viewBox='0 0 24 24'>
      <Path
        fill='currentColor'
        d='M22 12L18 8V11H10V13H18V16M20 18A10 10 0 1 1 20 6H17.27A8 8 0 1 0 17.27 18Z'
      />
    </Svg>
  );
};

export default Exit;
