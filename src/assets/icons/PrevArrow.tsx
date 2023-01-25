import React from 'react';
import styled from 'styled-components';

export interface IPrevArrowProps {}

export const Svg = styled.svg`
  width: 2.4rem;
  height: 2.4rem;
`;

export const Path = styled.path`
  fill: ${({ theme }) => theme.colors.iconPrimary};
`;

const PrevArrow: React.FC<IPrevArrowProps> = (): JSX.Element => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
      <Path d='M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z' />
    </Svg>
  );
};

export default PrevArrow;
