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
  | 'Horror'
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

export type MediaTypes = {
  appended_media_type: MediaProductionType;
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
  adult: boolean;
  original_title: string;
  release_date: string;
  title: string;
  video: boolean;
};

export type MediaDetailsTypes = {
  // Movie Detail types
  adult: boolean;
  appended_media_type: MediaProductionType;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: { id: number; logo_path: string; name: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  release_dates: {
    results: {
      iso_3166_1: string;
      release_dates: {
        certification: string;
        iso_639_1: string;
        note: string;
        release_date: string;
        type: number;
      }[];
    }[];
  };
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

  // Tv Details Types
  content_ratings: {
    results: { iso_3166_1: string; rating: string }[];
  };
  created_by: [{ id: number; credit_id: string; name: string; gender: number }];
  episode_run_time: number[];
  first_air_date: string;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
  };
  name: string;
  networks: { id: number; name: string; logo_path: string; origin_country: string }[];
  next_episode_to_air: null;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_name: string;
  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
  }[];
  type: string;
};
