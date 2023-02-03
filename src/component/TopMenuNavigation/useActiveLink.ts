import React from 'react';

import {
  ActiveLinks,
  OnToggleLinksParamsTypes,
  UseActiveLinkReturnTypes,
} from './TopMenuNavigation.types';

const useActiveLink = (): UseActiveLinkReturnTypes => {
  const [isActiveLinks, setIsActiveLink] = React.useState<ActiveLinks>({
    home: false,
    tvShows: false,
    movies: false,
    people: false,
    myList: false,
    account: false,
  });

  const onToggleLinks = ({ activeLink }: OnToggleLinksParamsTypes) => {
    return () => {
      // Do something
      switch (activeLink) {
        case '/':
          setIsActiveLink({
            ...isActiveLinks,
            home: !isActiveLinks.home,
          });
          break;
        case '/tv-shows':
          setIsActiveLink({
            ...isActiveLinks,
            tvShows: !isActiveLinks.tvShows,
          });
          break;
        case '/movies':
          setIsActiveLink({
            ...isActiveLinks,
            movies: !isActiveLinks.movies,
          });
          break;
        case '/people':
          setIsActiveLink({
            ...isActiveLinks,
            people: !isActiveLinks.people,
          });
          break;
        case '/my-list':
          setIsActiveLink({
            ...isActiveLinks,
            myList: !isActiveLinks.myList,
          });
          break;
        case '/account':
          setIsActiveLink({
            ...isActiveLinks,
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
