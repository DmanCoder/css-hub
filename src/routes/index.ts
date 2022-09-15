import { IRoutes } from './routes.types';

import Home from '../pages/Home';
import TVShows from '../pages/TVShows';
import Movies from '../pages/Movies';

const routes: IRoutes[] = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/tv-shows', name: 'TV Shows', Component: TVShows },
  { path: '/movies', name: 'Movies', Component: Movies },
];

export default routes;
