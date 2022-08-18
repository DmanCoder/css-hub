import { PopularType } from '../../actions/popularActions/popularActions.types';

export interface IPopularDefaultState {
  streams: PopularType[];
  tvShows: PopularType[];
  trending: PopularType[];
  indexPosition: number;
}
