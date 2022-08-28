import OnErrorImage from '../assets/imgs/onerror-image.jpg';

const imageError = (event: React.SyntheticEvent<HTMLImageElement, Event>): void => {
  const { currentTarget } = event;
  currentTarget.onerror = null;
  currentTarget.src = OnErrorImage;
};

export default imageError;
