import React from 'react';

import Hero from '../../components/Hero';
import Gallery from '../../components/Gallery';

import { IHomeProps } from './home.types';
import * as S from './home.styled';
import utils from '../../utils';

const Home: React.FC<IHomeProps> = (): JSX.Element => {
  return (
    <S.Wrapper>
      <Hero />
      <Gallery
        title='Whats Popular'
        section='popular'
        tabs={[
          {
            key: 'streaming',
            name: utils.translate('translateGallery.streaming'),
          },
          {
            key: 'tv',
            name: utils.translate('translateGallery.tv'),
          },
          {
            key: 'rent',
            name: utils.translate('translateGallery.rent'),
          },
          {
            key: 'theaters',
            name: utils.translate('translateGallery.theaters'),
          },
        ]}
      />

      <div style={{ height: '100vh', backgroundColor: 'black' }}></div>
      <div style={{ height: '100vh', backgroundColor: 'black' }}></div>
      <div style={{ height: '100vh', backgroundColor: 'black' }}></div>
    </S.Wrapper>
  );
};

export default Home;
