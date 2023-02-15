import React from 'react';

// Utilities
// import utils from '../../utils';

// Home Component
import { IHomeProps } from './Home.types';
import * as S from './Home.styled';
import useHome from './useHome';
import Hero from '../../component/Hero';

// TODO: https://www.npmjs.com/package/smooth-scrollbar
// TODO: https://www.youtube.com/watch?v=mxVFEnbRsBw&ab_channel=MrCoder
// TODO: https://www.youtube.com/watch?v=OvNG7bJjjiw&ab_channel=ALL.DESIGN (MAIN)
// TODO: https://greensock.com/forums/topic/32612-scroll-trigger-momentum-scrolling-not-anchor-link/ (MAIN)
// TODO: https://greensock.com/docs/v3/Plugins/ScrollSmoother (AYYY YES)
const Home: React.FC<IHomeProps> = (): JSX.Element => {
  const { test } = useHome();
  console.log(test, 'testtest');
  return (
    <S.Wrapper>
      <Hero />
      <S.Height />
      <S.Height />
      <S.Height />
      <S.Height />
      <S.Height />
    </S.Wrapper>
  );
};

export default Home;
