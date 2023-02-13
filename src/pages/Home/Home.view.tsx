import React from 'react';

// Utilities
// import utils from '../../utils';

// Home Component
import { IHomeProps } from './Home.types';
import * as S from './Home.styled';
import useHome from './useHome';

const Home: React.FC<IHomeProps> = (): JSX.Element => {
  const { test } = useHome();
  console.log(test, 'testtest');
  return (
    <S.Wrapper>
      <S.Tile>
        <S.Title>Hello world this is me</S.Title>
        <S.Button>Button</S.Button>
      </S.Tile>
      <S.Tile>
        <S.Title>Hello world this is me</S.Title>
        <S.Button>Button</S.Button>
      </S.Tile>
      <S.Tile>
        <S.Title>Hello world this is me</S.Title>
        <S.Button>Button</S.Button>
      </S.Tile>
      <S.Tile>
        <S.Title>Hello world this is me</S.Title>
        <S.Button>Button</S.Button>
      </S.Tile>
      <S.Tile>
        <S.Title>Hello world this is me</S.Title>
        <S.Button>Button</S.Button>
      </S.Tile>
      <S.Tile>
        <S.Title>Hello world this is me</S.Title>
        <S.Button>Button</S.Button>
      </S.Tile>
      <S.Tile>
        <S.Title>Hello world this is me</S.Title>
        <S.Button>Button</S.Button>
      </S.Tile>
      <S.Tile>
        <S.Title>Hello world this is me</S.Title>
        <S.Button>Button</S.Button>
      </S.Tile>
    </S.Wrapper>
  );
};

export default Home;
