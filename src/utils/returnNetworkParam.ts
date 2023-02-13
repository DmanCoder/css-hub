import { NetworkIdTypes } from '../typescriptGlobals/types';

const returnNetworkParam = (networkId: NetworkIdTypes) => {
  if (networkId === -1) {
    return '';
  } else {
    return `&with_networks=${networkId}`;
  }
};

export default returnNetworkParam;
