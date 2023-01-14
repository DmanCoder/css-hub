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
          <S.ListItemHoriz>
            <Assets.Icons.MoreHoriz />
          </S.ListItemHoriz>
          <S.ListItemLogo>
            <S.LogoOne>CSS</S.LogoOne>
            <S.LogoTwo>HUB</S.LogoTwo>
          </S.ListItemLogo>
          <S.ListItemTvShows>TV Shows</S.ListItemTvShows>
          <S.ListItemMovies>Movies</S.ListItemMovies>
          <S.ListItemPeople>People</S.ListItemPeople>
          <S.ListItemMyList>My List+</S.ListItemMyList>
          <S.ListItemSearch>Search ICON</S.ListItemSearch>
          <S.ListItemAccount>ACCOUNT ICON</S.ListItemAccount>
          <S.ListItemNotification>Notification ICON</S.ListItemNotification>
          <S.ListItemThemeMode>Light/Dark Mode</S.ListItemThemeMode>
          <S.ListItemLanguageSelector>English Selector ICON</S.ListItemLanguageSelector>
          <S.ListItemHamburger onClick={onHandleToggleHamburger}>
            <S.Bars>
              <S.Bar ref={burgerTopRef} />
              <S.Bar ref={burgerMidRef} />
              <S.Bar ref={burgerBotRef} />
            </S.Bars>
          </S.ListItemHamburger>
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
