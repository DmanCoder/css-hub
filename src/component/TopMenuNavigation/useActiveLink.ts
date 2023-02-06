import React from 'react';

import {
  ActiveLinks,
  OnToggleLinksParamsTypes,
  UseActiveLinkReturnTypes,
} from './TopMenuNavigation.types';

const useActiveLink = (): UseActiveLinkReturnTypes => {
  const defaultState = {
    home: false,
    tvShows: false,
    movies: false,
    people: false,
    myList: false,
    account: false,
  };
  const [isActiveLinks, setIsActiveLink] = React.useState<ActiveLinks>(defaultState);

  const onToggleLinks = ({ activeLink }: OnToggleLinksParamsTypes) => {
    return () => {
      switch (activeLink) {
        case '/':
          setIsActiveLink({
            ...defaultState,
            home: !isActiveLinks.home,
          });
          break;
        case '/tv-shows':
          setIsActiveLink({
            ...defaultState,
            tvShows: !isActiveLinks.tvShows,
          });
          break;
        case '/movies':
          setIsActiveLink({
            ...defaultState,
            movies: !isActiveLinks.movies,
          });
          break;
        case '/people':
          setIsActiveLink({
            ...defaultState,
            people: !isActiveLinks.people,
          });
          break;
        case '/my-list':
          setIsActiveLink({
            ...defaultState,
            myList: !isActiveLinks.myList,
          });
          break;
        case '/account':
          setIsActiveLink({
            ...defaultState,
            account: !isActiveLinks.account,
          });
          break;
        default:
          break;
      }
    };
  };

  return {
    isActiveLinks,
    onToggleLinks,
  };
};

export default useActiveLink;
