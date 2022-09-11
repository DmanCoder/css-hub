import { MediaDetailsTypes, MediaTypes, NetworkIdTypes } from '../../typescriptGlobals/types';

export type CalculateDescriptionParamsTypes = {
  description: string;
  width: number;
};

export type CalculateDescriptionReturnTypes = {
  description: string;
};

export type ReturnNetworkNamesParamsTypes = {
  currentMedia: MediaDetailsTypes;
  networkId: NetworkIdTypes;
};

export interface IHeroProps {}

export type UseHeroReturnType = {
  networkId: NetworkIdTypes;
  streams: MediaTypes[];
  indexPosition: number;
  description: string;
  currentMedia: MediaDetailsTypes;
  networkName: string;
  contentRating: string;
  contentDuration: string;
  backdropImage: string;
};

export type ContentRatingsParams = {
  currentMedia: MediaDetailsTypes;
};

export type ContentDurationParamTypes = {
  currentMedia: MediaDetailsTypes;
};
