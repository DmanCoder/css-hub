import { FastAverageColor, FastAverageColorResult } from 'fast-average-color';

const getAverageColor = (imgURL: string): Promise<FastAverageColorResult> => {
  const fac = new FastAverageColor();

  const image = new Image();

  image.crossOrigin = 'Anonymous';
  image.src = imgURL;

  return fac.getColorAsync(image);
};
export default getAverageColor;
