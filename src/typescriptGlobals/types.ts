import { IHBOMaxProps } from '../assets/logos/HBOMax';
import { INetflixProps } from '../assets/logos/Netflix';
import {
  HBO_MAX_NETWORK_ID,
  PRIME_VIDEOS_NETWORK_ID,
  DISNEY_NETWORK_ID,
  NETFLIX_NETWORK_ID,
  APPLE_TV_NETWORK_ID,
  SHUFFLE_NETWORK_ID,
} from './constants';

/* ==================================================
                   HTML TYPES
   ==================================================  */
export type BoundingClientCoordinates = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
};

export interface HTMLEventTarget extends EventTarget {
  parentElement: HTMLElement;
  getBoundingClientRect: () => BoundingClientCoordinates;
}

export interface ButtonMouseEvent extends React.MouseEvent<HTMLButtonElement> {
  target: HTMLEventTarget;
}

export type SvgLogoPropTypesTypes = React.FC<IHBOMaxProps> | React.FC<INetflixProps>;

/* ==================================================
                    NETWORK TYPES
   ==================================================  */
export type NetworkIdTypes =
  | typeof HBO_MAX_NETWORK_ID
  | typeof PRIME_VIDEOS_NETWORK_ID
  | typeof DISNEY_NETWORK_ID
  | typeof APPLE_TV_NETWORK_ID
  | typeof NETFLIX_NETWORK_ID
  | typeof SHUFFLE_NETWORK_ID;

export type NetworkNameTypes =
  | 'Netflix'
  | 'Prime Videos'
  | 'HBO MAX'
  | 'Disney+'
  | 'Apple Tv+'
  | 'Hulu'
  | 'Shuffle';

export type SelectedNetworkTypes = {
  networkId: NetworkIdTypes;
  networkName: NetworkNameTypes;
};

/* ==================================================
              COUNTRY / LANGUAGE TYPES
   ==================================================  */
export type CountryFlagTypes = {
  name: string;
  fileName: 'united-kingdom.png' | 'united-states.png' | 'canada.png' | 'australia.png';
  iso: CountryAlpha2CodeTypes;
};

export type CountryAlpha2CodeTypes = 'AU' | 'US' | 'CA' | 'GB';

export type LanguageCodeTypes = 'en-US' | 'es-CO' | 'ja' | 'hi' | 'fr';

/* ==================================================
                   GALLERY TYPES
   ==================================================  */
export type GalleryTypes =
  | 'Animations'
  | 'Comedy'
  | 'Action & Adventure'
  | 'Sci-Fi & Fantasy'
  | 'Romance'
  | 'Crime'
  | 'Kids'
  | 'Streaming'
  | 'On Tv'
  | 'For Rent'
  | 'In Theaters'
  | 'Whats Popular'
  | 'Anime'
  | 'Upcoming'
  | 'My List+'
  | 'Trending';

/* ==================================================
                   MEDIA TYPES
   ==================================================  */
export type MediaProductionType = 'movie' | 'tv';

export type MediaTvTypes = {
  appended_media_type: 'tv';
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

export type MediaMovieTypes = {
  adult: boolean;
  appended_media_type: 'movie';
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
