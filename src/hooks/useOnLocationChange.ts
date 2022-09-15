import React from 'react';
import { useLocation } from 'react-router-dom';

const useOnLocationChange = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log('route has changed');
  }, [location]);
};

export default useOnLocationChange;
