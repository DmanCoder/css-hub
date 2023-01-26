import React from 'react';
import styled from 'styled-components';

export interface IMoviesProps {}

export const Svg = styled.svg`
  height: 2.4rem;
  width: 2.4rem;
`;

export const Path = styled.path`
  fill: ${({ theme }) => theme.colors.iconSecondary};
`;

const Movies: React.FC<IMoviesProps> = (): JSX.Element => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
      <Path d='m19.6 32.35 13-8.45-13-8.45ZM7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h34V11H7v26Zm0 0V11v26Z' />
    </Svg>
  );
};

export default Movies;
