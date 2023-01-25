import styled from 'styled-components';
import { hex2rgba, immaFlex } from '../../styled/abstract/mixins';

export const Wrapper = styled.div`
  height: 5.5rem;
  position: fixed;
  top: 0;
  width: 100%;
  backdrop-filter: blur(0.3rem);
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
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
  display: block;
`;

export const LogoOne = styled.span`
  font-weight: 700;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.iconPrimary};
`;

export const LogoTwo = styled.span`
  font-weight: 700;
  font-size: 2.4rem;
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

export const ListItemHamburgerShadow = styled(ListItem)`
  display: block;
`;

export const Hamburger = styled.div`
  display: block;
  position: fixed;
  right: 1rem;
  padding: 1rem;
  z-index: 1003;
  top: 1rem;
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

export const MobileRightNavigation = styled.div`
  background-color: black;
  width: 75vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1002;
  right: -75vw;
`;

export const MobileList = styled.ul`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  height: 100vh;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const MobileListItem = styled.li`
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.textSecondary};
  ${immaFlex({ align: 'center' })};

  svg {
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const MobileListItemLogo = styled(MobileListItem)`
  font-size: 2.4rem;
  margin-bottom: 0.5rem;
`;

export const MobileListItemSearch = styled(MobileListItem)`
  position: relative;
  margin-bottom: 0.5rem;

  svg {
    margin-left: 0.5rem;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.backgroundTertiary};
    fill: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const MediaSearchInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  height: 3.8rem;
  text-indent: 3rem;
  font-size: 1.3rem;
  padding-right: 1rem;
  padding-left: 1rem;
  background-color: ${({ theme }) => theme.colors.backgroundTertiary};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const MobileListItemTvShows = styled(MobileListItem)``;

export const MobileListItemMovies = styled(MobileListItem)``;

export const MobileListItemPeople = styled(MobileListItem)``;

export const MobileListItemMyList = styled(MobileListItem)``;

export const MobileListItemAccount = styled(MobileListItem)``;

export const MobileListItemNotification = styled(MobileListItem)``;

export const MobileListItemThemeMode = styled(MobileListItem)``;

export const Overlay = styled.div`
  background-color: red;
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  position: fixed;
  filter: blur(2rem);
  background-color: ${({ theme }) => hex2rgba({ hex: theme.colors.backgroundPrimary, alpha: 0.8 })};
  top: 0;
  display: none;
  opacity: 0;
`;
