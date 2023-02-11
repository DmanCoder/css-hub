import React from 'react';
import { RootState, useAppSelector } from '../../redux/store';

import { UseAnimateLoaderReturnTypes } from './Loader.types';

const useAnimateLoader = (): UseAnimateLoaderReturnTypes => {
  const loaderRXS = useAppSelector((state: RootState) => state.loaderRXS);

  const loaderRef = React.useRef<HTMLDivElement>(null);
  const dotsRef = React.useRef<HTMLDivElement[]>([]);
  const taglineRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    console.log('loaderRXS', 'loaderRXS');
  }, [loaderRXS]);

  return { loaderRef, dotsRef, taglineRef };
};

export default useAnimateLoader;
