import styled from 'styled-components';
import { immaFlex } from '../../styled/abstract/mixins';

export const Wrapper = styled.div`
  height: 5.5rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  backdrop-filter: blur(0.3rem);
  ${immaFlex({ align: 'center' })};
`;

export const List = styled.ul`
  padding: 1rem;
  width: 100%;
  ${immaFlex({ align: 'center', just: 'space-between' })};
`;

export const ListItem = styled.li`
  display: none;
`;

export const ListItemHoriz = styled(ListItem)`
  display: block;
  ${immaFlex({ align: 'center' })};

  svg {
    fill: blue;
    width: 4rem;
    height: 4rem;
    color: ${({ theme }) => theme.colors.iconPrimary};
  }
`;

export const ListItemLogo = styled(ListItem)`
  display: block;
  font-size: 2.4rem;
  font-weight: 800;
  display: block;
`;

export const LogoOne = styled.span`
  color: ${({ theme }) => theme.colors.iconPrimary};
`;

export const LogoTwo = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const ListItemTvShows = styled(ListItem)``;

export const ListItemMovies = styled(ListItem)``;

export const ListItemPeople = styled(ListItem)``;

export const ListItemMyList = styled(ListItem)``;

export const ListItemSearch = styled(ListItem)``;

export const ListItemAccount = styled(ListItem)``;

export const ListItemNotification = styled(ListItem)``;

export const ListItemThemeMode = styled(ListItem)``;

export const ListItemLanguageSelector = styled(ListItem)``;

export const ListItemHamburger = styled(ListItem)`
  display: block;
`;

export const Bars = styled.div`
  padding: 1rem;
  z-index: 10001;
`;

export const Bar = styled.span`
  height: 0.1rem;
  width: 2.8rem;
  background-color: ${({ theme }) => theme.colors.iconPrimary};
  display: block;
  position: relative;
  transform-origin: 50% 50%;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const MobileTopNavigation = styled.div`
  background-color: black;
  width: 80vw;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  right: -80vw;
`;

export const MobileList = styled.ul``;

export const MobileListItem = styled.li``;
