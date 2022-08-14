import React from 'react';

import Assets from '../../assets';

import { IStreamingServicesProps } from './StreamingServices.types';
import useStreamingServices from './useStreamingServices';
import * as S from './StreamingServices.styled';
import utils from '../../utils';
import {
  APPLE_TV_NETWORK_ID,
  DISNEY_NETWORK_ID,
  HBO_MAX_NETWORK_ID,
  NETFLIX_NETWORK_ID,
  PRIME_VIDEOS_NETWORK_ID,
  SHUFFLE_NETWORK_ID,
} from '../../typescriptGlobals/constants';

const StreamingServices: React.FC<IStreamingServicesProps> = (): JSX.Element | null => {
  const {
    streamingServicesRef,
    streamingServicesWrapper,
    onToggleSideNetworkDisplay,
    onChangeSiteToSelectedNetwork,
    networkId,
  } = useStreamingServices();

  // TODO: Implement this - https://stackoverflow.com/questions/260857/changing-website-favicon-dynamically
  // TODO: https://create-react-app.dev/docs/using-the-public-folder/
  return (
    <S.Wrapper ref={streamingServicesWrapper}>
      <S.Network
        className={networkId === NETFLIX_NETWORK_ID ? 'active' : ''}
        title={utils.translate('translateLeftNavigation.netflix')}
        onClick={onChangeSiteToSelectedNetwork('Netflix')}
        ref={(el: HTMLDivElement) => streamingServicesRef.current.push(el)}>
        <Assets.Logos.Netflix />
      </S.Network>

      <S.Network
        className={networkId === APPLE_TV_NETWORK_ID ? 'active' : ''}
        title={utils.translate('translateLeftNavigation.appletv+')}
        onClick={onChangeSiteToSelectedNetwork('Apple Tv+')}
        ref={(el: HTMLDivElement) => streamingServicesRef.current.push(el)}>
        <Assets.Logos.AppleTV />
      </S.Network>

      <S.Network
        className={networkId === PRIME_VIDEOS_NETWORK_ID ? 'active' : ''}
        title={utils.translate('translateLeftNavigation.primevideos')}
        onClick={onChangeSiteToSelectedNetwork('Prime Videos')}
        ref={(el: HTMLDivElement) => streamingServicesRef.current.push(el)}>
        <Assets.Logos.PrimeVideos />
      </S.Network>

      <S.Network
        className={networkId === DISNEY_NETWORK_ID ? 'active' : ''}
        title={utils.translate('translateLeftNavigation.disney+')}
        onClick={onChangeSiteToSelectedNetwork('Disney+')}
        ref={(el: HTMLDivElement) => streamingServicesRef.current.push(el)}>
        <Assets.Logos.Disney />
      </S.Network>

      <S.Network
        className={networkId === HBO_MAX_NETWORK_ID ? 'active' : ''}
        title={utils.translate('translateLeftNavigation.hbomax')}
        onClick={onChangeSiteToSelectedNetwork('HBO MAX')}
        ref={(el: HTMLDivElement) => streamingServicesRef.current.push(el)}>
        <Assets.Logos.HBOMax />
      </S.Network>

      <S.Network
        className={networkId === SHUFFLE_NETWORK_ID ? 'active' : ''}
        title={utils.translate('translateLeftNavigation.shuffleMode')}
        onClick={onChangeSiteToSelectedNetwork('Shuffle')}
        ref={(el: HTMLDivElement) => streamingServicesRef.current.push(el)}>
        <Assets.Icons.Shuffle />
      </S.Network>

      <S.Network
        title={utils.translate('translateLeftNavigation.addNewNetwork')}
        ref={(el: HTMLDivElement) => streamingServicesRef.current.push(el)}>
        <S.AddNewNetwork>+</S.AddNewNetwork>
      </S.Network>

      <S.Network
        title={utils.translate('translateLeftNavigation.exit')}
        onClick={onToggleSideNetworkDisplay}
        ref={(el: HTMLDivElement) => streamingServicesRef.current.push(el)}>
        <S.Exit>
          <Assets.Icons.Exit />
        </S.Exit>
      </S.Network>
    </S.Wrapper>
  );
};

export default StreamingServices;
