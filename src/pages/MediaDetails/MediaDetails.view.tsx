import React from 'react';
import Hero from '../../components/Hero';

import { IMediaDetailsProps } from './MediaDetails.types';

const MediaDetails: React.FC<IMediaDetailsProps> = (): JSX.Element => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default MediaDetails;
