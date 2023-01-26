import React from 'react';
import styled from 'styled-components';

export interface IMyListProps {}

export const Svg = styled.svg`
  width: 2.4rem;
  height: 2.4rem;
`;

export const Path = styled.path`
  fill: ${({ theme }) => theme.colors.iconSecondary};
`;

const MyList: React.FC<IMyListProps> = (): JSX.Element => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
      <Path d='M6 31.5v-3h15v3Zm0-8.25v-3h23.5v3ZM6 15v-3h23.5v3Zm26.5 25v-8.5H24v-3h8.5V20h3v8.5H44v3h-8.5V40Z' />
    </Svg>
  );
};

export default MyList;
