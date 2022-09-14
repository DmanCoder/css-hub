import React from 'react';

import Hero from '../../components/Hero';
import Gallery from '../../components/Gallery';

import { IMoviesProps } from './Movies.types';
import * as S from './Movies.styled';
import utils from '../../utils';
import useMovies from './useMovies';

const Movies: React.FC<IMoviesProps> = (): JSX.Element => {
  const { tabs, myList } = useMovies();

  return (
    <S.Wrapper>
      <Hero />
    </S.Wrapper>
  );
};

export default Movies;
