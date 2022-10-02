import React from 'react';
import Hero from '../../components/Hero';

import { IMediaDetailsProps } from './MediaDetails.types';
import useMediaDetails from './useMediaDetails';

const MediaDetails: React.FC<IMediaDetailsProps> = (): JSX.Element => {
  const { params } = useMediaDetails();

  return (
    <div>
      <h2>{params?.media_type}</h2>
      <Hero />
    </div>
  );
};

export default MediaDetails;
