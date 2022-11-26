import React from 'react';
import styled from 'styled-components';

export interface IPlusHeartProps {}

export const Svg = styled.svg``;

export const Path = styled.path`
  fill: ${({ theme }) => theme.colors.iconPrimary};
`;

const PlusHeart: React.FC<IPlusHeartProps> = (): JSX.Element => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
      <Path d='M22 23.15Zm0 18.8-4.95-4.55q-4.35-4-7.225-6.85Q6.95 27.7 5.2 25.4q-1.75-2.3-2.475-4.325Q2 19.05 2 16.75q0-4.5 3.025-7.625T12.5 6q2.85 0 5.275 1.325Q20.2 8.65 22 11.2q2.1-2.7 4.45-3.95T31.5 6q4.05 0 6.775 2.75Q41 11.5 41.6 15.4h-2.95q-.45-2.75-2.325-4.575Q34.45 9 31.5 9q-2.55 0-4.75 1.55t-3.55 4.4h-2.45q-1.3-2.8-3.5-4.375Q15.05 9 12.5 9q-3.3 0-5.4 2.225Q5 13.45 5 16.75q0 1.95.775 3.8.775 1.85 2.7 4.2 1.925 2.35 5.225 5.5T22 38q1.6-1.45 3.025-2.7 1.425-1.25 2.825-2.45l.325.325q.325.325.725.7.4.375.725.7l.325.325q-1.35 1.2-2.8 2.45-1.45 1.25-3.1 2.75ZM36.5 34v-6.5H30v-3h6.5V18h3v6.5H46v3h-6.5V34Z' />
    </Svg>
  );
};

export default PlusHeart;
