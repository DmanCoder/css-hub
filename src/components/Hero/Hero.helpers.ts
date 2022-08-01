import OnErrorImage from '../../assets/imgs/onerror-image.jpg';

export const onImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>): void => {
  const { currentTarget } = event;
  currentTarget.onerror = null;
  currentTarget.src = OnErrorImage;
};
