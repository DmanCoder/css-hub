import { PopularType } from '../../actions/popularActions/popularActions.types';

export interface IPopularDefaultState {
  kids: PopularType[];
  streams: PopularType[];
  tvShows: PopularType[];
  trending: PopularType[];
  upcoming: PopularType[];
  myList: PopularType[];
  anime: PopularType[];
  animations: PopularType[];
  indexPosition: number;
}
