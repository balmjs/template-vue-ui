import { createApp } from 'vue';
import App from '@/layouts/app';
import router from '@/routes';
import useComponents from '@/components';
import usePlugins from '@/plugins';

function createMyApp() {
  const app = createApp(App);

  app.use(router);
  useComponents(app);
  usePlugins(app);

  app.mount('#app');
}

export default createMyApp;
