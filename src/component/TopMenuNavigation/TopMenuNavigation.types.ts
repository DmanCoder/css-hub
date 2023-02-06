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
  language: boolean;
  notification: boolean;
};

type NonSpecificRoutes = 'account' | 'language' | 'notification';

export type OnToggleLinksParamsTypes = {
  activeLink: RoutePathNamesTypes | NonSpecificRoutes;
};

export type ListItemProps = {
  isActiveRoute?: boolean;
};
