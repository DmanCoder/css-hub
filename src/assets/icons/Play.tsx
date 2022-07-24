import React from 'react';
import styled from 'styled-components';

export interface IPlayProps {}

export const Svg = styled.svg``;

export const Path = styled.path`
  fill: ${({ theme }) => theme.colors.iconPrimary};
`;

const Play: React.FC<IPlayProps> = (): JSX.Element => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
      <Path d='M16 37.85v-28l22 14Zm3-14Zm0 8.55 13.45-8.55L19 15.3Z' />
    </Svg>
  );
};

export default Play;
