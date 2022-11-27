import React from 'react';
import Hero from '../../components/Hero';
import { IMediaDetailsProps } from './MediaDetails.types';
import useMediaDetails from './useMediaDetails';

const MediaDetails: React.FC<IMediaDetailsProps> = (): JSX.Element => {
  useMediaDetails();
  return (
    <div>
      <Hero />
      <h3 style={{ color: 'white' }}>TESTING1234</h3>
      <h3 style={{ color: 'white' }}>TESTING1234</h3>
      <h3 style={{ color: 'white' }}>TESTING1234</h3>
      <h3 style={{ color: 'white' }}>TESTING1234</h3>
      <h3 style={{ color: 'white' }}>TESTING1234</h3>
      <h3 style={{ color: 'white' }}>TESTING1234</h3>
      <h3 style={{ color: 'white' }}>TESTING1234</h3>
      <h3 style={{ color: 'white' }}>TESTING1234</h3>
      <h3 style={{ color: 'white' }}>TESTING1234</h3>
      <h3 style={{ color: 'white' }}>TESTING1234</h3>
      <h3 style={{ color: 'white' }}>TESTING1234</h3>
      <h3 style={{ color: 'white' }}>TESTING1234</h3>
      <h3 style={{ color: 'white' }}>TESTING1234</h3>
    </div>
  );
};

export default MediaDetails;
