export interface IAppLoaderProps {}

export type StartDotsAnimationTypes = {
  initialLoaderTL: React.MutableRefObject<gsap.core.Timeline>;
  dotsRef: HTMLDivElement[];
  loaderToggle: {
    appLoaderToggle: boolean;
    setAppLoaderToggle: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

export type LoadAllImagesTypes = {
  setHasLoadedImages: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ExitLoadingTypes = {
  exitLoaderTL: React.MutableRefObject<gsap.core.Timeline>;
  dotsRef: HTMLDivElement[];
  loaderRef: HTMLDivElement | null;
  taglineRef: HTMLSpanElement | null;
};
