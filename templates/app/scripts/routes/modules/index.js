import Home from '@/views/home';
import NotFound from '@/views/not-found';
import demoRoutes from './demo';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    alias: '/'
  },
  ...demoRoutes,
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
];

export default routes;
