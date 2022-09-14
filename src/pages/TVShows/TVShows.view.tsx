import React from 'react';

import Hero from '../../components/Hero';
import Gallery from '../../components/Gallery';

import { ITVShowsProps } from './TVShows.types';
import * as S from './TVShows.styled';
import utils from '../../utils';
import useHome from './useTVShows';

const TVShows: React.FC<ITVShowsProps> = (): JSX.Element => {
  const { tabs, myList } = useHome();

  return (
    <S.Wrapper>
      <Hero />
    </S.Wrapper>
  );
};

export default TVShows;
