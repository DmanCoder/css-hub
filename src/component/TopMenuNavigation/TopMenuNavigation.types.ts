import { RoutePathNamesTypes } from '../../routes/routes.types';

export interface ITopMenuNavigationProps {
  toggleThemeBetweenLightAndDarkMode: () => void;
}

export type UseAnimateHamburgerReturnTypes = {
  burgerTopRef: React.RefObject<HTMLSpanElement>;
  burgerMidRef: React.RefObject<HTMLSpanElement>;
  burgerBotRef: React.RefObject<HTMLSpanElement>;
  mobileRightNavigationRef: React.RefObject<HTMLDivElement>;
  mobileListItemsRef: React.MutableRefObject<HTMLLIElement[]>;
  overlayRef: React.RefObject<HTMLDivElement>;
  onHandleToggleHamburger: () => void;
};

export type UseActiveLinkReturnTypes = {
  isActiveLinks: ActiveLinks;
  onToggleLinks: ({ activeLink }: OnToggleLinksParamsTypes) => () => void;
};

export type ActiveLinks = {
  home: boolean;
  tvShows: boolean;
  movies: boolean;
  people: boolean;
  myList: boolean;
  account: boolean;
};

export type OnToggleLinksParamsTypes = {
  activeLink: RoutePathNamesTypes;
};

export type ListItemProps = {
  isActiveRoute?: boolean;
};
