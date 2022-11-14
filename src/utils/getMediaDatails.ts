import { store } from '../redux/store';
import { MediaDetailsTypes, MediaGenres } from '../typescriptGlobals/types';
import utils from '.';

const geners = (currentMedia: MediaDetailsTypes) => {
  if (utils.isEmpty(currentMedia)) return null;
  const genres = currentMedia?.genres || [];

  const genresToArrayOfStrings = genres.map((genre: MediaGenres) => {
    return genre.name;
  });

  return genresToArrayOfStrings.join(', ');
};

const date = (currentMedia: MediaDetailsTypes) => {
  if (utils.isEmpty(currentMedia)) return null;

  if (utils.isMovie(currentMedia)) {
    return new Date(currentMedia?.release_date).getFullYear();
  } else if (!utils.isMovie(currentMedia)) {
    return new Date(currentMedia?.last_air_date).getFullYear();
  }
};

const duration = (currentMedia: MediaDetailsTypes) => {
  if (utils.isEmpty(currentMedia)) return null;

  const minutesIn1Hour = 60;

  const durationInMinutes = currentMedia?.runtime ?? currentMedia.episode_run_time;

  if (durationInMinutes >= minutesIn1Hour) {
    const duration = utils.timeConverter(durationInMinutes);
    const hours = duration[0];
    const minutes = duration[1] === 0 ? '' : ` ${duration[1]}m`;
    return `${hours}h${minutes}`;
  } else {
    const duration = utils.timeConverter(durationInMinutes);
    const minutes = duration[1];
    return `${minutes}m`;
  }
};

const certification = (currentMedia: MediaDetailsTypes) => {
  if (utils.isEmpty(currentMedia)) return null;

  const { iso } = store.getState().countryRXS;

  if (!utils.isEmpty(currentMedia?.release_dates)) {
    let rating = currentMedia?.release_dates?.results.find((movie) => {
      return movie?.iso_3166_1 === iso;
    });

    if (utils.isEmpty(rating)) {
      rating = currentMedia?.release_dates?.results.find((movie) => {
        return movie?.iso_3166_1 === 'US';
      });
    }

    return rating?.release_dates[0]?.certification ?? '';
  } else if (!utils.isEmpty(currentMedia?.content_ratings)) {
    return currentMedia?.content_ratings?.results[0]?.rating;
  } else {
    return '';
  }
};

const getMediaDatails = {
  geners,
  date,
  duration,
  certification,
};

export default getMediaDatails;
