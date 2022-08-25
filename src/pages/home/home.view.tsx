import React from 'react';

import Hero from '../../components/Hero';
import Gallery from '../../components/Gallery';

import { IHomeProps } from './home.types';
import * as S from './home.styled';
import utils from '../../utils';
import useHome from './useHome';

const Home: React.FC<IHomeProps> = (): JSX.Element => {
  const { tabs, myList } = useHome();

  return (
    <S.Wrapper>
      <Hero />

      {!utils.isEmpty(myList) && (
        <Gallery
          title={utils.translate('translateGallery.myList')}
          section='My List+'
          tabs={tabs}
        />
      )}

      <Gallery
        title={utils.translate('translateGallery.tabHeaderTitle')}
        section='Whats Popular'
        tabs={tabs}
      />

      <Gallery title={utils.translate('translateGallery.anime')} section='Anime' tabs={tabs} />

      <Gallery title={utils.translate('translateGallery.comedy')} section='Comedy' tabs={tabs} />

      <Gallery
        title={utils.translate('translateGallery.animation')}
        section='Animations'
        tabs={tabs}
      />

      <Gallery title={utils.translate('translateGallery.kids')} section='Kids' tabs={tabs} />

      <div style={{ height: '100vh', backgroundColor: 'black' }}></div>
      <div style={{ height: '100vh', backgroundColor: 'black' }}></div>
      <div style={{ height: '100vh', backgroundColor: 'black' }}></div>
    </S.Wrapper>
  );
};

export default Home;
