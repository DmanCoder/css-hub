import React from 'react';
import styled from 'styled-components';

export interface IDoubleArrowProps {}

export const Svg = styled.svg`
  height: 2.4rem;
  width: 2.4rem;
`;

export const Path = styled.path`
  fill: ${({ theme }) => theme.colors.iconPrimary};
`;

const DoubleArrow: React.FC<IDoubleArrowProps> = (): JSX.Element => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
      <Path d='m12.75 35.95-2.1-2.1 9.9-9.9-9.9-9.9 2.1-2.1 12 12Zm12.65 0-2.1-2.1 9.9-9.9-9.9-9.9 2.1-2.1 12 12Z' />
    </Svg>
  );
};

export default DoubleArrow;
