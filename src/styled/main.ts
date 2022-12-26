import { createGlobalStyle } from 'styled-components';

import { base } from './base/base';
import { normalize } from './base/normalize';

// CSS RESET / NORMALIZATION VERSION 8.0.1
export const CssReset = createGlobalStyle`
    ${normalize}
    ${base}
`;
