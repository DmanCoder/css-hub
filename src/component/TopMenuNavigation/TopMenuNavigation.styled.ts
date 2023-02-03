import styled, { css } from 'styled-components';
import { hex2rgba, immaFlex } from '../../styled/abstract/mixins';
import { ListItemProps } from './TopMenuNavigation.types';

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
  width: 2.5rem;
  background-color: ${({ theme }) => theme.colors.iconPrimary};
  display: block;
  position: relative;
  transform-origin: 50% 50%;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const MobileRightNavigation = styled.div`
  width: 80%;
  height: calc(var(--vh, 1vh) * 100);
  background-color: black;
  position: fixed;
  top: 0;
  z-index: 1002;
  right: -80%;
`;

export const MobileList = styled.ul`
  height: 100vh;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  ${immaFlex({ dir: 'column' })};
`;

export const MobileListItem = styled.li`
  font-size: 1.3rem;
  height: 4rem;
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.textSecondary};
  ${immaFlex({ align: 'center' })};

  ${({ isActiveRoute }: ListItemProps) =>
    isActiveRoute &&
    css`
      background-color: ${({ theme }) => theme.colors.backgroundTertiary};
      border-radius: 1rem;
    `}

  svg {
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
  }
`;

export const MobileListItemLogo = styled(MobileListItem)`
  font-size: 2.4rem;
  margin-bottom: 0.5rem;
`;

export const MobileListItemSearch = styled(MobileListItem)`
  position: relative;
  margin: 2rem 0;

  svg {
    margin-left: 0.5rem;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.backgroundTertiary};
    fill: ${({ theme }) => theme.colors.textSecondary};
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
  transition: color 0.25s ease-in-out;
  border: 0.1rem solid ${({ theme }) => theme.colors.textSecondary};
  background-color: ${({ theme }) => theme.colors.backgroundTertiary};
  color: ${({ theme }) => theme.colors.textSecondary};

  &:focus {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const HomeListItemTvShows = styled(MobileListItem)``;

export const MobileListItemTvShows = styled(MobileListItem)``;

export const MobileListItemMovies = styled(MobileListItem)``;

export const MobileListItemPeople = styled(MobileListItem)``;

export const MobileListItemMyList = styled(MobileListItem)``;

export const MobileListItemAccount = styled(MobileListItem)``;

export const MobileListItemNotification = styled(MobileListItem)``;

export const HorizontalLine = styled.hr`
  border: 0.1rem solid ${({ theme }) => theme.colors.backgroundTertiary};
  margin-top: 3rem;
`;

export const MobileListItemThemeMode = styled(MobileListItem)`
  margin-top: auto;
  font-size: 1.3rem;
  ${immaFlex({ align: 'center' })};
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 6rem;
  height: 3rem;
  margin-left: auto;
  transform: scale(0.8);
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  border: none;

  &:checked + span {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus + span {
    box-shadow: 0 0 0.1rem ${({ theme }) => theme.colors.primary};
  }

  &:checked + span:before {
    -webkit-transform: translateX(2.6rem);
    -ms-transform: translateX(2.6rem);
    transform: translateX(2.6rem);
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.backgroundTertiary};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 3.4rem;

  &::before {
    position: absolute;
    content: '';
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    left: 0.8rem;
    bottom: 0.5rem;
    background-color: ${({ theme }) => theme.colors.backgroundPrimaryInverse};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

export const MobileListItemProfile = styled(MobileListItem)`
  svg {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const Avatar = styled.figure`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
  border: 0.1rem solid ${({ theme }) => theme.colors.backgroundPrimaryInverse};
`;

export const AvatarImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  padding: 0.35rem;
`;

export const UserData = styled.div`
  margin-right: auto;
  margin-left: 1rem;
`;

export const Username = styled.h5`
  font-weight: 600;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: -0.1rem;
`;

export const Email = styled.p`
  text-transform: lowercase;
  font-size: 1.15rem;
`;

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
