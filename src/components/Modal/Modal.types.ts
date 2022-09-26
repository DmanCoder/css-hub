import React from 'react';
import { MediaDetailsTypes } from '../../typescriptGlobals/types';

export interface IModalProps {
  children: React.ReactNode;
}

export type UseModalReturnType = {
  currentMedia: MediaDetailsTypes;
};
