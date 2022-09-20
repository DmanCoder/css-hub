import { IRoutes } from './routes.types';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const routes: IRoutes[] = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/tv-shows', name: 'TV Shows', Component: Home },
  { path: '/movies', name: 'Movies', Component: Home },
  { path: '*', name: 'Page Not Found', Component: NotFound },
];

export default routes;
