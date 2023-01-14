import React from 'react';

// Assets
import Assets from '../../assets';

// Top Navigation
import { ITopMenuNavigationProps } from './TopMenuNavigation.types';
import useAnimateHamburger from './useAnimateHamburger.gsap';
import * as S from './TopMenuNavigation.styled';

const TopMenuNavigation: React.FC<ITopMenuNavigationProps> = ({}): JSX.Element => {
  const { bottomHamburger, middleHamburger, topHamburger } = useAnimateHamburger();
  return (
    <S.Wrapper>
      <S.List>
        <S.ListItem>
          <Assets.Icons.MoreHoriz />
        </S.ListItem>
        <S.ListItem>
          <S.LogoOne>CSS</S.LogoOne>
          <S.LogoTwo>HUB</S.LogoTwo>
        </S.ListItem>
        <S.ListItem>TV Shows</S.ListItem>
        <S.ListItem>Movies</S.ListItem>
        <S.ListItem>People</S.ListItem>
        <S.ListItem>My List+</S.ListItem>
        <S.ListItem>Search ICON</S.ListItem>
        <S.ListItem>ACCOUNT ICON</S.ListItem>
        <S.ListItem>Notification ICON</S.ListItem>
        <S.ListItem>Light/Dark Mode</S.ListItem>
        <S.ListItem>English Selector ICON</S.ListItem>
        <S.ListItem>
          <S.Bars>
            <S.Bar ref={topHamburger} />
            <S.Bar ref={middleHamburger} />
            <S.Bar ref={bottomHamburger} />
          </S.Bars>
        </S.ListItem>
      </S.List>
    </S.Wrapper>
  );
};

export default TopMenuNavigation;
