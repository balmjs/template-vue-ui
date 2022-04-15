import { createRouter, createWebHistory } from 'vue-router';
import { initRouter } from './middleware';
import routes from './modules';

const history = createWebHistory();
const router = createRouter({
  history,
  routes
});

initRouter(router);

export default router;
