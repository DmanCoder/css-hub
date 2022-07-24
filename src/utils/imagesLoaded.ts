import { gsap } from '../gsap';

type ImagesLoadedParams = {
  attributeTarget: string;
  onComplete: () => void;
};

type AreLoadedParams = {
  images: HTMLImageElement[];
  onComplete: () => void;
  numberOfImagesFound: number;
  index: number;
};

const checkImagesAreLoaded = ({
  images,
  onComplete,
  numberOfImagesFound,
  index,
}: AreLoadedParams) => {
  let imagesLoaded = 0; // TODO: REMOVE `window` and use an normal variable without causing any warnings in the console

  images[index].onload = () => {
    imagesLoaded++;
    if (imagesLoaded === numberOfImagesFound) {
      onComplete();
    }
  };
};

const imagesLoaded = ({ attributeTarget, onComplete }: ImagesLoadedParams): void => {
  const images: HTMLImageElement[] = gsap.utils.toArray(attributeTarget);
  const numberOfImagesFound = images.length;

  for (let index = 0; index < numberOfImagesFound; index++) {
    checkImagesAreLoaded({ images, onComplete, numberOfImagesFound, index });
  }
};

export default imagesLoaded;
