import { NetworkNameTypes } from '../../../typescriptGlobals/types';

export type CreatedBy = {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string | null;
};

export type Genres = {
  id: number;
  name: string;
};

export type LastEpisodeToAir = {
  air_date: string;
  episode_number: number;
  season_number: number;
  id: number;
  name: string;
  overview: string;
};

export type NextEpisodeToAir = {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
};

export type Networks = {
  // name: string;
  name: NetworkNameTypes;
  id: number;
  logo_path: string;
  origin_country: string;
};

export type ProductionCompanies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type ProductionCountries = {
  iso_3166_1: string;
  name: string;
};

export type Seasons = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
};

export type SpokenLanguages = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type TvShowRatings = {
  iso_3166_1: string;
  rating: string;
};

export type ContentRatingsForTvShows = {
  results: TvShowRatings[];
};

export type MovieCertificate = {
  certification: string;
  iso_639_1: string;
  note: string;
  release_date: Date;
  type: number;
};

export type MovieReleaseDate = {
  iso_3166_1: string;
  release_dates: MovieCertificate[];
};

export type ContentRatingsForMovies = {
  results: MovieReleaseDate[];
};

export type Media = {
  iso_3166_1: string;
  rating: string;
};

export type MediaDetails = {
  backdrop_path: string;
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genres[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  networks: Networks[];
  next_episode_to_air: NextEpisodeToAir;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompanies[];
  production_countries: ProductionCountries[];
  seasons: Seasons[];
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
  content_ratings: ContentRatingsForTvShows;
  release_dates: ContentRatingsForMovies;
  runtime: number;
};

export type VideoResults = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
};

export type MediaVideos = {
  id: number;
  results: VideoResults[];
};

export type MediaRecommendations = {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  media_type: string;
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

export type PopularType = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;

  media_details: MediaDetails;
  media_recommendations: MediaRecommendations[];
  media_videos: MediaVideos;

  name: string;
  appended_media_type: string;
  title: string; // Movies
  original_title: string; // Movies
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

export interface IPopularAction {
  type: string;
  payload: PopularType[];
}

export type PopularDispatchTypes = IPopularAction;
