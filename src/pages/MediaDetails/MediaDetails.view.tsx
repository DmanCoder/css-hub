import React from 'react';
import Hero from '../../components/Hero';
import { fetchDetailsMediaAXN } from '../../redux/actions/mediaDetailsActions/mediaDetailsActions';

import { IMediaDetailsProps } from './MediaDetails.types';

const MediaDetails: React.FC<IMediaDetailsProps> = (): JSX.Element => {
  // dispatch(fetchDetailsMediaAXN(streams[indexPosition]));

  return (
    <div>
      <Hero />
    </div>
  );
};

export default MediaDetails;
