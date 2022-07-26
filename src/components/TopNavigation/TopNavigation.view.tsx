import React from 'react';

import useTopNavigation from './useTopNavigation';

import Assets from '../../assets';
import { INavProps } from './TopNavigation.types';
import * as S from './TopNavigation.styled';
import utils from '../../utils';

const Nav: React.FC<INavProps> = () => {
  const {
    onToggleSideNetworkDisplay,
    navWrapperRef,
    onLongPress,
    onHideCountryList,
    countryRXS,
    onChangeCountry,
  } = useTopNavigation();

  return (
    <S.Nav>
      <S.ListContainer ref={navWrapperRef} className='network-padding' id='king-denis'>
        <S.ListItem {...onLongPress} onMouseLeave={onHideCountryList}>
          <S.LogoContainer>
            <S.ListItemLogo>CSS</S.ListItemLogo>
            <S.ListItemLogo>
              HUB
              <S.CountryFlag
                src={require(`../../assets/imgs/flags/${countryRXS?.url}`)}
                title={countryRXS?.name}
              />
            </S.ListItemLogo>
          </S.LogoContainer>

          <S.CountryItems className='country-list'>
            <S.CountryItem onClick={onChangeCountry('AU')}>Australia</S.CountryItem>
            <S.CountryItem onClick={onChangeCountry('UK')}>United Kingdom</S.CountryItem>
            <S.CountryItem onClick={onChangeCountry('CA')}>Canada</S.CountryItem>
            <S.CountryItem onClick={onChangeCountry('US')}>United States</S.CountryItem>
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
