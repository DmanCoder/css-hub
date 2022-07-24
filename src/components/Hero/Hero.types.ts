import React from 'react';
import { MediaDetails, PopularType } from '../../redux/actions/popularActions/popularActions.types';
import { NetworkIdTypes } from '../../typescriptGlobals/types';

export type CalculateDescriptionParamsTypes = {
  description: string;
  width: number;
};

export type CalculateDescriptionReturnTypes = {
  description: string;
};

export type ReturnNetworkNamesParamsTypes = {
  media: PopularType;
  mediaDetails: MediaDetails;
  networkId: NetworkIdTypes;
};

export interface IHeroProps {}

export type UseHeroReturnType = {
  networkId: NetworkIdTypes;
  streams: PopularType[];
  index: number;
  description: string;
  onImageError: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  heroMediaDetails: MediaDetails;
  networkName: string;
  contentRating: string;
};

export type ContentRatingsParams = {
  heroMediaDetails: MediaDetails;
};
