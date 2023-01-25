import React from 'react';
import styled from 'styled-components';

export interface INextArrowProps {}

export const Svg = styled.svg`
  width: 2.4rem;
  height: 2.4rem;
`;

export const Path = styled.path`
  fill: ${({ theme }) => theme.colors.iconPrimary};
`;

const NextArrow: React.FC<INextArrowProps> = (): JSX.Element => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
      <Path d='m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z' />
    </Svg>
  );
};

export default NextArrow;
