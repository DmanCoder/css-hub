import React from 'react';
import { NetworkIdTypes, NetworkNameTypes } from '../../typescriptGlobals/types';

export interface IStreamingServicesProps {}

// export type UseStreamingServicesParamTypes = {};

export type UseStreamingServicesReturnTypes = {
  streamingServicesRef: React.MutableRefObject<HTMLDivElement[]>;
  streamingServicesWrapper: React.MutableRefObject<HTMLDivElement | null>;
  onToggleSideNetworkDisplay: () => void;
  onChangeSiteToSelectedNetwork: (network: NetworkNameTypes) => (event: React.MouseEvent) => void;
  networkId: NetworkIdTypes;
};

export type StreamingServiceAnimationParamTypes = {
  streamingServicesRef: React.MutableRefObject<HTMLDivElement[]>;
  streamingServicesWrapper: React.MutableRefObject<HTMLDivElement | null>;
  isShowLeftNavigation: boolean;
};
