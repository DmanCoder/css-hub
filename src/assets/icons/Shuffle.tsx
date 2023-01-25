import React from 'react';
import styled from 'styled-components';

export interface IShuffleProps {}

export const Svg = styled.svg`
  width: 2.4rem;
  height: 2.4rem;
`;

export const Path = styled.path`
  fill: ${({ theme }) => theme.colors.iconPrimary};
`;

const Shuffle: React.FC<IShuffleProps> = (): JSX.Element => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
      <Path d='M19.75 21.8 7.5 9.6l2.15-2.15 12.25 12.2Zm9.3 18.7v-3h6.25l-9.2-9.15 2.1-2.15 9.3 9.2v-6.35h3V40.5Zm-19.45 0-2.1-2.15 27.9-27.9h-6.35v-3H40.5V18.9h-3v-6.3Z' />
    </Svg>
  );
};

export default Shuffle;
