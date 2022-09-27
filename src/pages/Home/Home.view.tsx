import React from 'react';

import Hero from '../../components/Hero';
import Gallery from '../../components/Gallery';

import { IHomeProps } from './Home.types';
import * as S from './Home.styled';
import utils from '../../utils';
import useHome from './useHome';

const Home: React.FC<IHomeProps> = (): JSX.Element => {
  const { myList, horror, romance, crime, streams, animations, comedy, action, scifi } = useHome();

  return (
    <S.Wrapper>
      <Hero />

      {!utils.isEmpty(myList) && (
        <Gallery title={utils.translate('translateGallery.myList')} section='My List+' />
      )}

      {!utils.isEmpty(streams) && (
        <Gallery
          title={utils.translate('translateGallery.tabHeaderTitle')}
          section='Whats Popular'
        />
      )}

      {!utils.isEmpty(comedy) && (
        <Gallery title={utils.translate('translateGallery.comedy')} section='Comedy' />
      )}

      {!utils.isEmpty(animations) && (
        <Gallery title={utils.translate('translateGallery.animation')} section='Animations' />
      )}

      {!utils.isEmpty(action) && (
        <Gallery
          title={utils.translate('translateGallery.actionAdventure')}
          section='Action & Adventure'
        />
      )}

      {!utils.isEmpty(scifi) && (
        <Gallery
          title={utils.translate('translateGallery.scfiAndFantasy')}
          section='Sci-Fi & Fantasy'
        />
      )}

      {!utils.isEmpty(romance) && (
        <Gallery title={utils.translate('translateGallery.romance')} section='Romance' />
      )}

      {!utils.isEmpty(crime) && (
        <Gallery title={utils.translate('translateGallery.crime')} section='Crime' />
      )}

      {!utils.isEmpty(horror) && (
        <Gallery title={utils.translate('translateGallery.horror')} section='Horror' />
      )}
    </S.Wrapper>
  );
};

export default Home;
