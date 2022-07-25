import { IHBOMaxProps } from '../assets/logos/HBOMax';
import { INetflixProps } from '../assets/logos/Netflix';
import {
  HBO_MAX_NETWORK_ID,
  PRIME_VIDEOS_NETWORK_ID,
  DISNEY_NETWORK_ID,
  NETFLIX_NETWORK_ID,
  APPLE_TV_NETWORK_ID,
  SHUFFLE_NETWORK_ID,
} from './constants';

export type BoundingClientCoordinates = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
};

export interface HTMLEventTarget extends EventTarget {
  parentElement: HTMLElement;
  getBoundingClientRect: () => BoundingClientCoordinates;
}

export interface ButtonMouseEvent extends React.MouseEvent<HTMLButtonElement> {
  target: HTMLEventTarget;
}

export type NetworkIdTypes =
  | typeof HBO_MAX_NETWORK_ID
  | typeof PRIME_VIDEOS_NETWORK_ID
  | typeof DISNEY_NETWORK_ID
  | typeof APPLE_TV_NETWORK_ID
  | typeof NETFLIX_NETWORK_ID
  | typeof SHUFFLE_NETWORK_ID;

export type SvgLogoPropTypesTypes = React.FC<IHBOMaxProps> | React.FC<INetflixProps>;

export type NetworkNameTypes =
  | 'Netflix'
  | 'Prime Videos'
  | 'HBO MAX'
  | 'Disney+'
  | 'Apple Tv+'
  | 'Hulu'
  | 'Shuffle';

export type SelectedNetworkTypes = {
  networkId: NetworkIdTypes;
  networkName: NetworkNameTypes;
};

export type CountryFlagTypes = {
  name: string;
  url: string;
  iso: string;
};
