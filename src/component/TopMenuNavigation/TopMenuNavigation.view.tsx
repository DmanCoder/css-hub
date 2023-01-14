import React from 'react';

// Assets
import Assets from '../../assets';

// Top Navigation
import { ITopMenuNavigationProps } from './TopMenuNavigation.types';
import useAnimateHamburger from './useAnimateHamburger.gsap';
import * as S from './TopMenuNavigation.styled';

const TopMenuNavigation: React.FC<ITopMenuNavigationProps> = ({}): JSX.Element => {
  const {
    burgerBotRef,
    burgerMidRef,
    burgerTopRef,
    mobileTopNavigationRef,
    mobileListItemsRef,
    onHandleToggleHamburger,
  } = useAnimateHamburger();
  return (
    <React.Fragment>
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
          <S.ListItem onClick={onHandleToggleHamburger}>
            <S.Bars>
              <S.Bar ref={burgerTopRef} />
              <S.Bar ref={burgerMidRef} />
              <S.Bar ref={burgerBotRef} />
            </S.Bars>
          </S.ListItem>
        </S.List>
      </S.Wrapper>

      <S.MobileTopNavigation ref={mobileTopNavigationRef}>
        <S.MobileList>
          <S.MobileListItem ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            <S.LogoOne>CSS</S.LogoOne>
            <S.LogoTwo>HUB</S.LogoTwo>
          </S.MobileListItem>
          <S.MobileListItem ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            TV Shows
          </S.MobileListItem>
          <S.MobileListItem ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            Movies
          </S.MobileListItem>
          <S.MobileListItem ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            People
          </S.MobileListItem>
          <S.MobileListItem ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            My List+
          </S.MobileListItem>
          <S.MobileListItem ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            Search ICON
          </S.MobileListItem>
          <S.MobileListItem ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            ACCOUNT ICON
          </S.MobileListItem>
          <S.MobileListItem ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            Notification ICON
          </S.MobileListItem>
          <S.MobileListItem ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            Light/Dark Mode
          </S.MobileListItem>
          <S.MobileListItem ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            English Selector ICON
          </S.MobileListItem>
        </S.MobileList>
      </S.MobileTopNavigation>
    </React.Fragment>
  );
};

export default TopMenuNavigation;
