import React from 'react';
import { IAccountProps } from './icons/Account';
import { IArrowDropdownProps } from './icons/ArrowDropdown';
import { IDoubleArrowProps } from './icons/DoubleArrow';
import { IExitProps } from './icons/Exit';
import { IGraphEQProps } from './icons/GraphicEQ';
import { IHorizDropdownProps } from './icons/MoreHoriz';
import { INextArrowProps } from './icons/NextArrow';
import { INotificationProps } from './icons/Notification';
import { IPlayProps } from './icons/Play';
import { IPlusHeartProps } from './icons/PlusHeart';
import { IPlusHeartFillProps } from './icons/PlusHeartFill';
import { IPrevArrowProps } from './icons/PrevArrow';
import { ISearchProps } from './icons/Search';
import { IShuffleProps } from './icons/Shuffle';
import { IStarProps } from './icons/Star';
import { IAppleTVPlusProps } from './logos/AppleTV';
import { IDisneyPlusProps } from './logos/DisneyPlus';
import { IHBOMaxProps } from './logos/HBOMax';
import { INetflixProps } from './logos/Netflix';
import { IPrimeVideosProps } from './logos/PrimeVideos';

export type LogoTypes = {
  Netflix: React.FC<INetflixProps>;
  Disney: React.FC<IDisneyPlusProps>;
  PrimeVideos: React.FC<IPrimeVideosProps>;
  HBOMax: React.FC<IHBOMaxProps>;
  AppleTV: React.FC<IAppleTVPlusProps>;
};

export type IconsTypes = {
  ArrowDropdown: React.FC<IArrowDropdownProps>;
  Account: React.FC<IAccountProps>;
  GraphicEQ: React.FC<IGraphEQProps>;
  MoreHoriz: React.FC<IHorizDropdownProps>;
  Search: React.FC<ISearchProps>;
  Notification: React.FC<INotificationProps>;
  Exit: React.FC<IExitProps>;
  Play: React.FC<IPlayProps>;
  Shuffle: React.FC<IShuffleProps>;
  DoubleArrow: React.FC<IDoubleArrowProps>;
  Star: React.FC<IStarProps>;
  PlusHeart: React.FC<IPlusHeartProps>;
  PlusHeartFill: React.FC<IPlusHeartFillProps>;
  NextArrow: React.FC<INextArrowProps>;
  PrevArrow: React.FC<IPrevArrowProps>;
};

export type ImgsTypes = {
  AustraliaFlag: string;
  CanadaFlag: string;
  UnitedKingdom: string;
  UnitedStates: string;
};

export type AssetsTypes = {
  Logos: LogoTypes;
  Icons: IconsTypes;
  imgs: ImgsTypes;
};
