import React from 'react';
import styled from 'styled-components';

export interface IArrowDropdownProps {}

export const Svg = styled.svg`
  width: 4.5rem;
  height: 4.5rem;
`;

export const Path = styled.path`
  fill: ${({ theme }) => theme.colors.iconPrimary};
`;

const ArrowDropdown: React.FC<IArrowDropdownProps> = (): JSX.Element => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg'>
      <Path d='M24 30 14 20.05H34Z' />
    </Svg>
  );
};
export default ArrowDropdown;
