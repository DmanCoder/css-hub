import styled from 'styled-components';
import { immaFlex } from '../../styled/abstract/mixins';

export const Wrapper = styled.div`
  height: 5.5rem;
  ${immaFlex({ align: 'center' })};
`;

export const List = styled.ul`
  padding: 1rem;
  width: 100%;
  ${immaFlex({ align: 'center', just: 'space-between' })};
`;

export const ListItem = styled.li`
  color: red;
  display: none;
  margin: 0 !important;

  &:nth-child(1) {
    // Dot, dot, dot icon
    background-color: lime;
    display: block;

    svg {
      fill: blue;
    }
  }

  &:nth-child(2) {
    // CSSHUB
    font-size: 2.4rem;
    font-weight: 800;
    display: block;
  }

  &:last-child {
    // Hamburger
    display: block;
  }
`;

export const LogoOne = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const LogoTwo = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Bars = styled.div`
  padding: 1rem;
`;

export const Bar = styled.span`
  height: 0.01rem;
  width: 2.8rem;
  background-color: white;
  display: block;
  position: relative;
  transform-origin: 50% 50%;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const MobileTopNavigation = styled.div`
  background-color: pink;
`;

export const MobileList = styled.ul``;

export const MobileListItem = styled.li``;
