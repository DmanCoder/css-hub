import React from 'react';
import Hero from '../../components/Hero';
import { IMediaDetailsProps } from './MediaDetails.types';
import useMediaDetails from './useMediaDetails';

const MediaDetails: React.FC<IMediaDetailsProps> = (): JSX.Element => {
  useMediaDetails();
  return (
    <div>
      <Hero />
    </div>
  );
};

export default MediaDetails;
