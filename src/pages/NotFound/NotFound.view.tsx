import React from 'react';

import { INotFoundProps } from './NotFound.types';

const NotFound: React.FC<INotFoundProps> = (): JSX.Element => {
  location.href = '/'; // Push back to home page
  return <React.Fragment />;
};

export default NotFound;
