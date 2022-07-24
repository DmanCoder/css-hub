import { PopularType } from '../../actions/popularActions/popularActions.types';

export interface IDefaultState {
  tvShows: PopularType[];
  streams: PopularType[];
  rents: PopularType[];
  movies: PopularType[];
}
