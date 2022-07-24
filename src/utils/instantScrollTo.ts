type InstantScrollToParamsType = {
  xPosition: number;
  yPosition: number;
};
const instantScrollTo = ({ xPosition, yPosition }: InstantScrollToParamsType): void => {
  window.scrollTo(xPosition, yPosition);
};

export default instantScrollTo;
