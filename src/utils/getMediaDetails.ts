import { store } from '../redux/store';
import { MediaDetailsTypes, MediaGenres } from '../typescriptGlobals/types';
import utils from '.';

const genres = (currentMedia: MediaDetailsTypes) => {
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
    console.log(`${hours}h${minutes}`, '`${hours}h${minutes}`');
    return `${hours}h${minutes}`;
  } else {
    console.log(durationInMinutes, 'durationInMinutes');
    const duration = utils.timeConverter(durationInMinutes);
    const minutes = duration[1];
    console.log(`${minutes}}`, '`${hours}h${minutes}`', duration);

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

const starAverageRating = (currentMedia: MediaDetailsTypes): number => {
  if (utils.isEmpty(currentMedia)) return 0;
  const average = Math.floor(currentMedia?.vote_average / 2);
  const ratings = average;
  return ratings;
};

const getMediaDetails = {
  genres,
  date,
  duration,
  certification,
  starAverageRating,
};

export default getMediaDetails;
