import { FastAverageColor } from 'fast-average-color';

const getAverageColor = (imgURL: string): any => {
  const fac = new FastAverageColor();

  const downloadedImg = new Image();
  downloadedImg.crossOrigin = 'Anonymous';
  downloadedImg.src = imgURL;

  fac
    .getColorAsync(downloadedImg)
    .then((color) => {
      // do somthing
      console.log(color);
    })
    .catch((e) => {
      console.log(e);
    });
};
export default getAverageColor;
