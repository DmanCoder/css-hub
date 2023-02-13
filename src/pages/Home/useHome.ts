import React from 'react';

import { useAppDispatch } from '../../redux/store';
import { fetchStreamsAXN } from '../../redux/actions/mediaActions/mediaActionsActions';

const useHome = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchStreamsAXN());
  }, []);

  return {
    test: 'TESTING',
  };
};

export default useHome;
