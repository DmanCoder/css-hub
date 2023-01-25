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
    mobileRightNavigationRef,
    mobileListItemsRef,
    overlayRef,
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
          <S.ListItemHamburgerShadow></S.ListItemHamburgerShadow>
        </S.List>
      </S.Wrapper>

      <S.Hamburger onClick={onHandleToggleHamburger}>
        <S.Bar ref={burgerTopRef} />
        <S.Bar ref={burgerMidRef} />
        <S.Bar ref={burgerBotRef} />
      </S.Hamburger>

      <S.MobileRightNavigation ref={mobileRightNavigationRef}>
        <S.MobileList>
          <S.MobileListItemLogo ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            <S.LogoOne>CSS</S.LogoOne>
            <S.LogoTwo>HUB</S.LogoTwo>
          </S.MobileListItemLogo>
          <S.MobileListItemSearch ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            <Assets.Icons.Search />
            <S.MediaSearchInput
              type='text'
              placeholder='Search for a movie, tv show, person......'
            />
          </S.MobileListItemSearch>
          <S.MobileListItemTvShows ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            TV Shows
          </S.MobileListItemTvShows>
          <S.MobileListItemMovies ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            Movies
          </S.MobileListItemMovies>
          <S.MobileListItemPeople ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            People
          </S.MobileListItemPeople>
          <S.MobileListItemMyList ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            My List+
          </S.MobileListItemMyList>
          <S.MobileListItemAccount ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            <Assets.Icons.Account /> Account
          </S.MobileListItemAccount>
          <S.MobileListItemNotification
            ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            <Assets.Icons.Notification /> Notification
          </S.MobileListItemNotification>
          <S.MobileListItemThemeMode
            ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            Light/Dark Mode
          </S.MobileListItemThemeMode>
          <S.MobileListItem ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            EN <Assets.Icons.ArrowDropdown />
          </S.MobileListItem>
        </S.MobileList>
      </S.MobileRightNavigation>

      <S.Overlay ref={overlayRef} onClick={onHandleToggleHamburger}></S.Overlay>
    </React.Fragment>
  );
};

export default TopMenuNavigation;
