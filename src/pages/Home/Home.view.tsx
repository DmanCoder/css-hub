import React from 'react';

// Utilities
// import utils from '../../utils';

// Home Component
import { IHomeProps } from './Home.types';
import * as S from './Home.styled';
import useHome from './useHome';
import Hero from '../../component/Hero';

const Home: React.FC<IHomeProps> = (): JSX.Element => {
  const { test } = useHome();
  console.log(test, 'testtest');
  return (
    <S.Wrapper>
      <Hero />
    </S.Wrapper>
  );
};

export default Home;
