import React from 'react';

import useTopNavigation from './useTopNavigation';

import Assets from '../../assets';
import { INavProps } from './TopNavigation.types';
import * as S from './TopNavigation.styled';
import utils from '../../utils';

const Nav: React.FC<INavProps> = () => {
  const { onToggleSideNetworkDisplay, navWrapperRef, onPageReset, onActivateCountrySelection } =
    useTopNavigation();

  return (
    <S.Nav>
      <S.ListContainer ref={navWrapperRef} className='network-padding' id='king-denis'>
        <S.ListItem onClick={onPageReset}>
          <S.LogoContainer onMouseEnter={onActivateCountrySelection}>
            <S.ListItemLogo>CSS</S.ListItemLogo>
            <S.ListItemLogo>HUB</S.ListItemLogo>
          </S.LogoContainer>
          <S.CountryItems>
            <S.CountryItem>Australia</S.CountryItem>
            <S.CountryItem>Great Britain</S.CountryItem>
            <S.CountryItem>Canada</S.CountryItem>
            <S.CountryItem>United States</S.CountryItem>
          </S.CountryItems>
        </S.ListItem>
        <S.ListItem>{utils.translate('translateTopNavigation.tvShow')}</S.ListItem>
        <S.ListItem>{utils.translate('translateTopNavigation.movie')}</S.ListItem>
        <S.ListItem>{utils.translate('translateTopNavigation.people')}</S.ListItem>
        <S.ListItem>{utils.translate('translateTopNavigation.myList')}</S.ListItem>

        <S.ListItem>
          EN
          <Assets.Icons.ArrowDropdown />
        </S.ListItem>
        <S.ListItem>
          <Assets.Icons.Account />
        </S.ListItem>
        <S.ListItem>
          <Assets.Icons.Notification />
        </S.ListItem>
        <S.ListItem onClick={onToggleSideNetworkDisplay}>
          <Assets.Icons.MoreHoriz />
        </S.ListItem>
        <S.ListItem>
          <Assets.Icons.Search />
        </S.ListItem>
      </S.ListContainer>
    </S.Nav>
  );
};

export default Nav;
