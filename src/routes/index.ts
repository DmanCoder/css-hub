import { IRoutes } from './routes.types';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import MediaDetails from '../pages/MediaDetails';

const routes: IRoutes[] = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/:media_type', name: 'Media', Component: Home },
  { path: '/media-details/:media_type/:media_id', name: 'Movies', Component: MediaDetails },
  { path: '*', name: 'Page Not Found', Component: NotFound },
];

export default routes;
