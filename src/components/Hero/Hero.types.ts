import { Params } from 'react-router-dom';
import { RoutePathNamesTypes } from '../../routes/routes.types';
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
  indexPosition: null | number;
  description: string;
  currentMedia: MediaDetailsTypes;
  networkName: string;
  backdropImage: string;
  onNavigateTo: ({ pathTo }: NavigateParamsTypes) => () => void;
  params: Readonly<Params<string>>;
};

export type ContentRatingsParams = {
  currentMedia: MediaDetailsTypes;
};

export type ContentDurationParamTypes = {
  currentMedia: MediaDetailsTypes;
};

export type ContentDateParamTypes = {
  currentMedia: MediaDetailsTypes;
};

export type NavigateParamsTypes = {
  pathTo: string; // TODO: FIX TYPE - ROUTE TYPE
};
