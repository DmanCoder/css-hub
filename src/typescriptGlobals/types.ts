import {
  APPLE_TV_NETWORK_ID,
  DISNEY_NETWORK_ID,
  HBO_MAX_NETWORK_ID,
  NETFLIX_NETWORK_ID,
  PRIME_VIDEOS_NETWORK_ID,
  SHUFFLE_NETWORK_ID,
} from './constants';

export type Theme = 'light' | 'dark';

/* ==================================================
                    LOCAL STORAGE
   ==================================================  */
export type LSValueTypes = IsDarkModeType | SelectedNetworkTypes;
export type LSKeyTypes = 'isDarkMode' | 'selectedNetwork';
export type IsDarkModeType = boolean;

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
