import { PopularType } from '../../actions/popularActions/popularActions.types';

export interface IPopularDefaultState {
  streams: PopularType[];
  tvShows: PopularType[];
  indexPosition: number;
}
