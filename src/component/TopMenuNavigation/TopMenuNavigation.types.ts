export interface ITopMenuNavigationProps {}

export type UseAnimateHamburgerReturnTypes = {
  burgerTopRef: React.RefObject<HTMLSpanElement>;
  burgerMidRef: React.RefObject<HTMLSpanElement>;
  burgerBotRef: React.RefObject<HTMLSpanElement>;
  mobileRightNavigationRef: React.RefObject<HTMLDivElement>;
  mobileListItemsRef: React.MutableRefObject<HTMLLIElement[]>;
  overlayRef: React.RefObject<HTMLDivElement>;
  onHandleToggleHamburger: () => void;
};
