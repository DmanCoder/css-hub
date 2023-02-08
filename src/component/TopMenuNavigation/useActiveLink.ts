import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ActiveLinks,
  OnToggleLinksParamsTypes,
  UseActiveLinkReturnTypes,
} from './TopMenuNavigation.types';

const useActiveLink = (): UseActiveLinkReturnTypes => {
  const navigate = useNavigate();

  const defaultState: ActiveLinks = {
    home: false,
    tvShows: false,
    movies: false,
    people: false,
    myList: false,
    account: false,
    language: false,
    notification: false,
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
        case 'account':
          setIsActiveLink({
            ...defaultState,
            account: !isActiveLinks.account,
          });
          break;
        case 'notification':
          setIsActiveLink({
            ...defaultState,
            notification: !isActiveLinks.notification,
          });
          break;
        case 'language':
          setIsActiveLink({
            ...defaultState,
            language: !isActiveLinks.language,
          });
          break;
        default:
          break;
      }
    };
  };

  React.useEffect(() => {
    if (isActiveLinks.home) navigate('/ho');
  }, [isActiveLinks]);

  return {
    isActiveLinks,
    onToggleLinks,
  };
};

export default useActiveLink;
