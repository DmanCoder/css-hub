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
    languageRXS,
    onChangeCountry,
    onShowLanguageList,
    languageRef,
    onChangeAppLanguage,
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
            <S.CountryItem className='country-list-item' onClick={onChangeCountry('AU')}>
              <S.CountryItemFlag
                src={require(`../../assets/imgs/flags/australia.png`)}
                title={utils.translate('translateTopNavigation.auFlag')}
              />
              <S.CountryItemText>{utils.translate('translateTopNavigation.au')}</S.CountryItemText>
            </S.CountryItem>
            <S.CountryItem className='country-list-item' onClick={onChangeCountry('GB')}>
              <S.CountryItemFlag
                src={require(`../../assets/imgs/flags/united-kingdom.png`)}
                title={utils.translate('translateTopNavigation.gb')}
              />
              <S.CountryItemText>{utils.translate('translateTopNavigation.gb')}</S.CountryItemText>
            </S.CountryItem>
            <S.CountryItem className='country-list-item' onClick={onChangeCountry('CA')}>
              <S.CountryItemFlag
                src={require(`../../assets/imgs/flags/canada.png`)}
                title={utils.translate('translateTopNavigation.caFlag')}
              />
              <S.CountryItemText>{utils.translate('translateTopNavigation.ca')}</S.CountryItemText>
            </S.CountryItem>
            <S.CountryItem className='country-list-item' onClick={onChangeCountry('US')}>
              <S.CountryItemFlag
                src={require(`../../assets/imgs/flags/united-states.png`)}
                title={utils.translate('translateTopNavigation.usFlag')}
              />
              <S.CountryItemText>{utils.translate('translateTopNavigation.us')}</S.CountryItemText>
            </S.CountryItem>
          </S.CountryItems>
        </S.ListItem>
        <S.ListItem>{utils.translate('translateTopNavigation.tvShow')}</S.ListItem>
        <S.ListItem>{utils.translate('translateTopNavigation.movie')}</S.ListItem>
        <S.ListItem>{utils.translate('translateTopNavigation.people')}</S.ListItem>
        <S.ListItem>{utils.translate('translateTopNavigation.myList')}</S.ListItem>

        <S.ListItem ref={languageRef}>
          <S.LanguageContainer onClick={onShowLanguageList}>
            {utils.returnLanguageCodeShortHand(languageRXS)}
            <Assets.Icons.ArrowDropdown />
          </S.LanguageContainer>
          <S.LanguageItems className='language-list'>
            <S.LanguageItem
              onClick={onChangeAppLanguage('en-US')}
              className='language-list-item'
              title='English (en-US)'>
              en
            </S.LanguageItem>
            <S.LanguageItem
              onClick={onChangeAppLanguage('zh-TW')}
              className='language-list-item'
              title='Chinese (zh-TW)'>
              zh
            </S.LanguageItem>
            <S.LanguageItem
              onClick={onChangeAppLanguage('es-CO')}
              className='language-list-item'
              title='Spanish (es-CO)'>
              es
            </S.LanguageItem>
            <S.LanguageItem
              onClick={onChangeAppLanguage('hi')}
              className='language-list-item'
              title='Hindi (hi)'>
              HI
            </S.LanguageItem>
            <S.LanguageItem
              onClick={onChangeAppLanguage('fr')}
              className='language-list-item'
              title='French (Standard)'>
              FR
            </S.LanguageItem>
          </S.LanguageItems>
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
