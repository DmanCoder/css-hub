import React from 'react';

// Assets
import Assets from '../../assets';

// Top Navigation
import { ITopMenuNavigationProps } from './TopMenuNavigation.types';
import useAnimateHamburger from './useAnimateHamburger.gsap';
import * as S from './TopMenuNavigation.styled';

const TopMenuNavigation: React.FC<ITopMenuNavigationProps> = ({
  toggleThemeBetweenLightAndDarkMode,
}): JSX.Element => {
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
            <S.MediaSearchInput type='text' placeholder='Search movie, tv show, person......' />
          </S.MobileListItemSearch>
          <S.MobileListItemTvShows
            className='active'
            ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            <Assets.Icons.Home />
            Home
          </S.MobileListItemTvShows>
          <S.MobileListItemTvShows ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            <Assets.Icons.RemoteTv />
            TV Shows
          </S.MobileListItemTvShows>
          <S.MobileListItemMovies ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            <Assets.Icons.Movies />
            Movies
          </S.MobileListItemMovies>
          <S.MobileListItemPeople ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            <Assets.Icons.People />
            People
          </S.MobileListItemPeople>
          <S.MobileListItemMyList ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            <Assets.Icons.MyList />
            My List+
          </S.MobileListItemMyList>
          <S.MobileListItemAccount ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            <Assets.Icons.Account /> Account
          </S.MobileListItemAccount>
          <S.MobileListItemNotification
            ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            <Assets.Icons.Notification /> Notification
          </S.MobileListItemNotification>

          <S.MobileListItem ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            <Assets.Icons.Language />
            EN <Assets.Icons.ArrowDropdown />
          </S.MobileListItem>

          <S.HorizontalLine />

          <S.MobileListItemThemeMode
            ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            Change theme
            <S.Switch>
              <S.SwitchInput type='checkbox' onChange={toggleThemeBetweenLightAndDarkMode} />
              <S.Slider className='slider' />
            </S.Switch>
          </S.MobileListItemThemeMode>

          <S.MobileListItemProfile ref={(el: HTMLLIElement) => mobileListItemsRef.current.push(el)}>
            <S.Avatar>
              <S.AvatarImage
                src='https://randomuser.me/api/portraits/men/70.jpg'
                alt='My Profile'
              />
            </S.Avatar>

            <S.UserData>
              <S.Username>MoonWalker123</S.Username>
              <S.Email>moonwalker@gmail.com</S.Email>
            </S.UserData>
            <Assets.Icons.Exit />
          </S.MobileListItemProfile>
        </S.MobileList>
      </S.MobileRightNavigation>

      <S.Overlay ref={overlayRef} onClick={onHandleToggleHamburger}></S.Overlay>
    </React.Fragment>
  );
};

export default TopMenuNavigation;
