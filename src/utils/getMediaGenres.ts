import utils from '.';
import { MediaGenres } from '../typescriptGlobals/types';

const getMediaGenres = (genres: MediaGenres[]) => {
  if (utils.isEmpty(genres)) return null;

  const genresToArrayOfStrings = genres.map((genre) => {
    return genre.name;
  });

  return genresToArrayOfStrings.join(', ');
};

export default getMediaGenres;
