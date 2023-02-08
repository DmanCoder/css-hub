import React from 'react';
import styled from 'styled-components';

export interface ITvCastProps {}

export const Svg = styled.svg`
  width: 2.4rem;
  height: 2.4rem;
`;

export const Path = styled.path`
  fill: ${({ theme }) => theme.colors.iconSecondary};
`;

const TvCast: React.FC<ITvCastProps> = (): JSX.Element => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
      <Path d='M8.3 36.3q-2.05-2.55-3.175-5.675T4 24q0-7.9 5.275-13.55T22.2 4.1v3q-6.4.7-10.8 5.475Q7 17.35 7 24q0 2.85.925 5.45t2.525 4.75ZM24 44q-3.65 0-6.9-1.225-3.25-1.225-5.9-3.425l2.1-2.15q2.25 1.8 4.95 2.8 2.7 1 5.75 1t5.775-1.025Q32.5 38.95 34.75 37.15l2.1 2.15q-2.6 2.2-5.875 3.45T24 44Zm15.75-7.7-2.15-2.1q1.6-2.15 2.5-4.75.9-2.6.9-5.45 0-6.6-4.35-11.4-4.35-4.8-10.8-5.5v-3q7.7.7 12.925 6.35Q44 16.1 44 24q0 3.5-1.125 6.625T39.75 36.3Zm-20.4-4.25v-17.1l13.4 8.55Z' />
    </Svg>
  );
};

export default TvCast;
