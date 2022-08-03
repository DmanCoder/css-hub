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
        <S.ListItem {...onLongPress}>
          <S.LogoContainer>
            <S.ListItemLogo>CSS</S.ListItemLogo>
            <S.ListItemLogo>
              HUB
              <S.CountryFlag
                src={require(`../../assets/imgs/flags/${countryRXS?.fileName}`)}
                title={countryRXS?.name}
              />
            </S.ListItemLogo>
          </S.LogoContainer>

          <S.CountryItems className='country-list' onMouseLeave={onHideCountryList}>
            <S.CountryItem onClick={onChangeCountry('AU')}>
              <S.CountryItemFlag
                src={require(`../../assets/imgs/flags/australia.png`)}
                title='Australia Flag'
              />
              <S.CountryItemText>Australia</S.CountryItemText>
            </S.CountryItem>
            <S.CountryItem onClick={onChangeCountry('GB')}>
              <S.CountryItemFlag
                src={require(`../../assets/imgs/flags/united-kingdom.png`)}
                title='United Kingdom Flag'
              />
              <S.CountryItemText>United kindom</S.CountryItemText>
            </S.CountryItem>
            <S.CountryItem onClick={onChangeCountry('CA')}>
              <S.CountryItemFlag
                src={require(`../../assets/imgs/flags/canada.png`)}
                title='Canada Flag'
              />
              <S.CountryItemText>Canada</S.CountryItemText>
            </S.CountryItem>
            <S.CountryItem onClick={onChangeCountry('US')}>
              <S.CountryItemFlag
                src={require(`../../assets/imgs/flags/united-states.png`)}
                title='United State Flag'
              />
              <S.CountryItemText>United States</S.CountryItemText>
            </S.CountryItem>
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
