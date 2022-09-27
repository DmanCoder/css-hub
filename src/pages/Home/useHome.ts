import React from 'react';
import {
  fetchActionAndAdventureMediaAXN,
  fetchAnimationsMediaAXN,
  fetchComedyMediaAXN,
  fetchCrimeMediaAXN,
  fetchHorrorMediaAXN,
  fetchRomanceMediaAXN,
  fetchScifiAndFantasyMediaAXN,
  fetchStreamsAXN,
} from '../../redux/actions/mediaActions/mediaActions';
import {
  fetchDetailsMediaAXN,
  fetchMediaDetailsContentRatings,
  generateRandomNumberAXN,
} from '../../redux/actions/mediaDetailsActions/mediaDetailsActions';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import utils from '../../utils';
import { UseHomeReturnTypes } from './Home.types';

const useHome = (): UseHomeReturnTypes => {
  const dispatch = useAppDispatch();

  const { myList, horror, romance, crime, streams, animations, action, scifi, comedy } =
    useAppSelector((state: RootState) => state.mediaRXS);

  React.useEffect(() => {
    dispatch(fetchStreamsAXN());
    dispatch(fetchComedyMediaAXN());
    dispatch(fetchAnimationsMediaAXN());
    dispatch(fetchActionAndAdventureMediaAXN());
    dispatch(fetchScifiAndFantasyMediaAXN());
    dispatch(fetchRomanceMediaAXN());
    dispatch(fetchCrimeMediaAXN());
    dispatch(fetchHorrorMediaAXN());
  }, []);

  React.useEffect(() => {
    if (!utils.isEmpty(streams)) {
      dispatch(generateRandomNumberAXN(streams));
      dispatch(fetchDetailsMediaAXN(streams));
      dispatch(fetchMediaDetailsContentRatings());
    }
  }, [streams]);

  return { myList, horror, romance, crime, streams, animations, action, scifi, comedy };
};

export default useHome;
