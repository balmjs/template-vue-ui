import NotFound from '@/layouts/not-found';
import Home from '@/pages/home';
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
