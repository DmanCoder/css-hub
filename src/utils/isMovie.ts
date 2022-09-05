import { MediaTypes } from '../typescriptGlobals/types';

const isMovie = (value: MediaTypes): boolean => value?.appended_media_type === 'movie';

export default isMovie;
