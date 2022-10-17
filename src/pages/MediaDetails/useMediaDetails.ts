import React from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchDetailsMediaAXN,
  fetchMediaDetailsContentRatings,
} from '../../redux/actions/mediaDetailsActions/mediaDetailsActions';
import { useAppDispatch } from '../../redux/store';
import { MediaProductionType } from '../../typescriptGlobals/types';
import { UseMediaDetailsReturnTypes } from './MediaDetails.types';

const useMediaDetails = (): UseMediaDetailsReturnTypes => {
  const dispatch = useAppDispatch();
  const params = useParams();

  React.useEffect(() => {
    const mediaId: number = Number(params?.media_id) ?? 0;
    const mediaType = params?.media_type as MediaProductionType;
    dispatch(fetchDetailsMediaAXN({ mediaId, mediaType }));
    dispatch(fetchMediaDetailsContentRatings({ mediaId, mediaType }));
  }, []);

  return { params };
};

export default useMediaDetails;
