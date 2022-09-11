import { MediaDetailsTypes, MediaTypes } from '../typescriptGlobals/types';

const isMovie = (value: MediaTypes | MediaDetailsTypes): boolean =>
  value?.appended_media_type === 'movie';

export default isMovie;
