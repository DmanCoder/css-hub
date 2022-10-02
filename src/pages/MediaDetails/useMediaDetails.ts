import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { RootState, useAppSelector } from '../../redux/store';
import { MediaProductionType } from '../../typescriptGlobals/types';
import { ParamsTypes, UseMediaDetailsReturnTypes } from './MediaDetails.types';

const useMediaDetails = (): UseMediaDetailsReturnTypes => {
  // const { myList } = useAppSelector((state: RootState) => state.mediaRXS);
  const params = useParams<ParamsTypes>();

  React.useEffect(() => {
    console.log(params, 'paramsparamsparams');
  }, []);

  return { params };
};

export default useMediaDetails;
