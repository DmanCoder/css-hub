import React from 'react';
import styled from 'styled-components';

export interface IPlusHeartFillProps {}

export const Svg = styled.svg`
  width: 2.4rem;
  height: 2.4rem;
`;

export const Path = styled.path`
  fill: ${({ theme }) => theme.colors.iconSecondary};
`;

const PlusHeartFill: React.FC<IPlusHeartFillProps> = (): JSX.Element => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
      <Path d='M36.5 34v-6.5H30v-3h6.5V18h3v6.5H46v3h-6.5V34ZM22 42l-6.35-5.7q-3.6-3.25-6.175-5.8-2.575-2.55-4.25-4.8-1.675-2.25-2.45-4.35Q2 19.25 2 16.95q0-4.7 3.15-7.825T13 6q2.6 0 4.95 1.075T22 10.15q1.7-2 4.05-3.075Q28.4 6 31 6q4.25 0 7.125 2.575T41.7 14.6q-.9-.35-1.8-.525-.9-.175-1.75-.175-5.05 0-8.6 3.525T26 26q0 2.6 1.05 4.925Q28.1 33.25 30 34.9q-.95.85-2.475 2.175Q26 38.4 24.9 39.4Z' />
    </Svg>
  );
};

export default PlusHeartFill;
