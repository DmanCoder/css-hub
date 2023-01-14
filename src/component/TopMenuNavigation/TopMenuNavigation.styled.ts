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

export const Bars = styled.div``;

export const Bar = styled.span`
  height: 0.1rem;
  width: 3rem;
  background-color: white;
  display: block;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
