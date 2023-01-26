import React from 'react';
import styled from 'styled-components';

export interface IGraphEQProps {}

export const Svg = styled.svg`
  width: 2.4rem;
  height: 2.4rem;
`;

export const Path = styled.path`
  fill: ${({ theme }) => theme.colors.iconSecondary};
`;

const GraphEQ: React.FC<IGraphEQProps> = (): JSX.Element => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
      <Path d='M14.25 36V12H17.25V36ZM22.5 44V4H25.5V44ZM6 28V20H9V28ZM30.75 36V12H33.75V36ZM39 28V20H42V28Z' />
    </Svg>
  );
};
export default GraphEQ;
