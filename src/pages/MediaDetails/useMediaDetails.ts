import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import {
  fetchDetailsMediaAXN,
  fetchMediaDetailsContentRatings,
} from '../../redux/actions/mediaDetailsActions/mediaDetailsActions';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { MediaProductionType } from '../../typescriptGlobals/types';
import { ParamsTypes, UseMediaDetailsReturnTypes } from './MediaDetails.types';

const useMediaDetails = (): UseMediaDetailsReturnTypes => {
  const dispatch = useAppDispatch();
  const params = useParams();
  console.log(params, 'paramsparamsparamsparams');

  React.useEffect(() => {
    const mediaId: number = Number(params?.media_id) ?? 0;
    const mediaType = params?.media_type as MediaProductionType;
    dispatch(fetchDetailsMediaAXN({ mediaId, mediaType }));
    dispatch(fetchMediaDetailsContentRatings({ mediaId, mediaType }));
  }, []);

  return { params };
};

export default useMediaDetails;
