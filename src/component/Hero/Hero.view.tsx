import React from 'react';

// Hero component
import { IHeroProps } from './Hero.types';
import * as S from './Hero.styled';
import { imgFilterURL } from '../../axios/init';

const Hero: React.FC<IHeroProps> = () => {
  return (
    <S.Wrapper>
      <S.BackgroundImage
        src={`${imgFilterURL}/zymbuoBoL1i94xAOzVJF6IuWLfD.jpg`}
        // alt={currentMedia?.name}
        // onError={utils.imageError}
        className='home-page-image'
      />
    </S.Wrapper>
  );
};
export default Hero;
