import { store } from '../redux/store';
import { switchBetweenPopularStreamingNetworksAXN } from '../redux/actions/streamingServicesActions/streamingServicesActions';
import { SelectedNetworkTypes } from '../typescriptGlobals/types';

export const rehydrateSelectedNetwork = () => {
  const selectedNetwork: null | string = window.localStorage.getItem('selectedNetwork');

  if (typeof selectedNetwork === 'string') {
    const parsed: SelectedNetworkTypes = JSON.parse(selectedNetwork);
    window.document.title = parsed.networkName;
    store.dispatch(switchBetweenPopularStreamingNetworksAXN(parsed.networkName));

    const favicon = window.document.getElementById('app-favicon');
    if (favicon?.nodeName?.toLocaleLowerCase() === 'link') {
      favicon.setAttribute('href', `/favicon-${parsed.networkId}.ico`);
    }
  }
};
