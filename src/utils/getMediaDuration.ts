import utils from '.';
import { MediaDetailsTypes } from '../typescriptGlobals/types';

const getMediaDuration = (media: MediaDetailsTypes) => {
  if (utils.isEmpty(media)) return null;

  if (!utils.isEmpty(media?.runtime)) {
    return media?.runtime;
  } else if (!utils.isEmpty(media.episode_run_time)) {
    return media.episode_run_time[0];
  }
};

export default getMediaDuration;
