import styled from 'styled-components';

import { immaFlex } from '../../styled/abstract/mixins';

export const Nav = styled.nav`
  background: transparent;
  font-size: 1.3rem;
  height: 6.5rem;
  font-weight: 400;
  position: fixed;
  top: 0;
  width: 100%;
  color: ${({ theme }) => theme.colors.textPrimary};
  z-index: 1000;

  @media ${({ theme }) => theme.mediaQ.tablet45} {
    display: flex;
    padding-left: 1vw;
    padding-right: 1vw;
    width: 100%;
  }

  @media ${({ theme }) => theme.mediaQ.laptop64} {
    padding-left: 2vw;
    padding-right: 2vw;
  }
`;

export const ListContainer = styled.ul`
  width: 100%;
  position: relative;
  ${immaFlex({ just: 'space-between' })};

  svg {
    cursor: pointer;
    width: 2.8rem;
    height: 2.8rem;

    @media ${({ theme }) => theme.mediaQ.tablet45} {
      width: 3.25rem;
      height: 3.25rem;
      padding: 0.7rem;
    }

    @media ${({ theme }) => theme.mediaQ.desktop90} {
    }
  }
`;

export const ListItemLogo = styled.span`
  font-size: 2.4rem;
  font-weight: 800;
  cursor: pointer;

  @media ${({ theme }) => theme.mediaQ.tablet45} {
    font-size: 2.1rem;
  }

  &:nth-child(2) {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const LogoContainer = styled.div``;

export const CountryItems = styled.ul`
  display: none;
  position: absolute;
  bottom: -8rem;
  text-align: center;
`;

export const CountryItem = styled.li``;

export const ListItem = styled.li`
  align-self: center;
  padding: 1rem;
  font-weight: 500;
  text-transform: capitalize;
  position: relative;
  ${immaFlex({ align: 'center' })};

  @media ${({ theme }) => theme.mediaQ.tablet45} {
    padding: unset;
    font-size: 1.2rem;
  }

  /* LOGO */
  &:first-child {
    order: 1;
    position: relative;

    @media ${({ theme }) => theme.mediaQ.laptop64} {
      order: 0;
    }
  }

  /* SEARCH ICON */
  &:last-child {
    order: 2;
  }

  &:nth-child(2), // LOGO
  &:nth-child(3), // TV Shows 
  &:nth-child(4), // Movies 
  &:nth-child(5), // People
  &:nth-child(6), // My List+ 
  &:nth-child(7), // Account 
  &:nth-child(8) // Notification
  {
    display: none;

    @media ${({ theme }) => theme.mediaQ.laptop64} {
      display: inline-block;
    }
  }

  &:nth-child(2), // HOME
  &:nth-child(3), // MOVIES
  &:nth-child(4), // TV SHOWS
  &:nth-child(5) // PEOPLE
  {
    opacity: 0.75;
    cursor: pointer;

    @media ${({ theme }) => theme.mediaQ.laptop64} {
    }
  }

  &:nth-child(1), // LOGO
  &:nth-child(2), // HOME
  &:nth-child(3), // MOVIES
  &:nth-child(4), // TV SHOWS
  &:nth-child(5), // PEOPLE
  &:nth-child(9) // MORE HORIZ
  {
    @media ${({ theme }) => theme.mediaQ.laptop64} {
      margin-right: 3rem;
    }
  }

  &:nth-child(10), // SEARCH
  &:nth-child(8), // NOTIFICATION
  &:nth-child(7), // PROFILE
  &:nth-child(6) // LANGUAGE
  {
    @media ${({ theme }) => theme.mediaQ.laptop64} {
      margin-left: 1rem;
    }
  }

  &:nth-child(9) {
    margin-left: 0.8rem;
    @media ${({ theme }) => theme.mediaQ.laptop64} {
      margin-right: 2rem;
      order: -1;
      margin-left: 0;
    }
  }

  &:nth-child(6) {
    @media ${({ theme }) => theme.mediaQ.laptop64} {
      order: 12;
      font-weight: 500;
      position: relative;
      top: -0.3rem;
      cursor: pointer;
      opacity: 0.75;
      ${immaFlex({ align: 'center' })};

      svg {
        padding: 0;
        width: 1.6rem;
      }
    }
  }

  &:nth-child(10) {
    @media ${({ theme }) => theme.mediaQ.laptop64} {
      order: 9;
      margin-left: auto;
    }
  }

  &:nth-child(7) {
    @media ${({ theme }) => theme.mediaQ.laptop64} {
      order: 10;
    }
  }

  &:nth-child(8) {
    @media ${({ theme }) => theme.mediaQ.laptop64} {
      order: 0;
      order: 11;
    }
  }
`;

export const SteamingServices = styled.div`
  position: relative;
`;
