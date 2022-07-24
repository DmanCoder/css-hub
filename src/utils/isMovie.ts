import { PopularType } from '../redux/actions/popularActions/popularActions.types';

const isMovie = (value: PopularType): boolean => value?.appended_media_type === 'movie';

export default isMovie;
