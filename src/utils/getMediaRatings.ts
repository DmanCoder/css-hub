import { MediaDetailsTypes } from '../typescriptGlobals/types';
import isMovie from './isMovie';

const getMediaRatings = (currentMedia: MediaDetailsTypes) => {
  if (isMovie(currentMedia)) {
    return new Date(currentMedia?.release_date).getFullYear();
  } else if (!isMovie(currentMedia)) {
    return new Date(currentMedia?.last_air_date).getFullYear();
  } else return null;
};

export default getMediaRatings;
