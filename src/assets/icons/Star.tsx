import React from 'react';
import styled from 'styled-components';

export interface IStarProps {}

export const Svg = styled.svg``;

export const Path = styled.path`
  /* fill: ${({ theme }) => theme.colors.iconPrimary}; */
`;

const Start: React.FC<IStarProps> = (): JSX.Element => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
      <Path d='m11.65 44 3.25-14.05L4 20.5l14.4-1.25L24 6l5.6 13.25L44 20.5l-10.9 9.45L36.35 44 24 36.55Z' />
    </Svg>
  );
};

export default Start;
