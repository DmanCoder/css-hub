import React from 'react';

import Hero from '../../components/Hero';
import Gallery from '../../components/Gallery';

import { IHomeProps } from './home.types';
import * as S from './home.styled';
import utils from '../../utils';
import useHome from './useHome';

const Home: React.FC<IHomeProps> = (): JSX.Element => {
  const { tabs } = useHome();

  return (
    <S.Wrapper>
      <Hero />
      <Gallery
        title={utils.translate('translateGallery.tabHeaderTitle')}
        section='Popular'
        tabs={tabs}
      />

      <div style={{ height: '100vh', backgroundColor: 'black' }}></div>
      <div style={{ height: '100vh', backgroundColor: 'black' }}></div>
      <div style={{ height: '100vh', backgroundColor: 'black' }}></div>
    </S.Wrapper>
  );
};

export default Home;
