import utils from '.';
import { MediaDetailsTypes } from '../typescriptGlobals/types';

const getDuration = (totalMinutes: number) => {
  const minutesIn1Hour = 60;

  if (totalMinutes >= minutesIn1Hour) {
    const duration = utils.timeConverter(totalMinutes);
    const hours = duration[0];
    const minutes = duration[1] === 0 ? '' : ` ${duration[1]}m`;
    return `${hours}h${minutes}`;
  } else {
    const duration = utils.timeConverter(totalMinutes);
    const minutes = duration[1];
    return `${minutes}m`;
  }
};

const getMediaDuration = (media: MediaDetailsTypes) => {
  if (utils.isEmpty(media)) return null;

  if (!utils.isEmpty(media?.runtime)) {
    return getDuration(media?.runtime);
  } else if (!utils.isEmpty(media.episode_run_time)) {
    return getDuration(media.episode_run_time[0]);
  }
};

export default getMediaDuration;
