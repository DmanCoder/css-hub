export interface ITopMenuNavigationProps {}

export type UseAnimateHamburgerReturnTypes = {
  burgerTopRef: React.RefObject<HTMLSpanElement>;
  burgerMidRef: React.RefObject<HTMLSpanElement>;
  burgerBotRef: React.RefObject<HTMLSpanElement>;
  mobileTopNavigationRef: React.RefObject<HTMLDivElement>;
  mobileListItemsRef: React.MutableRefObject<HTMLLIElement[]>;
  onHandleToggleHamburger: () => void;
};
