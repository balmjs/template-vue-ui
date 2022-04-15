import { createApp } from 'vue';
import App from '@/views/layouts/app';
import router from '@/routes';
import BalmUI from 'balm-ui';
import $http from '@/plugins/http';
import myStore from '@/store';

function createMyApp() {
  const app = createApp(App);

  app.use(router);
  app.use(BalmUI, {
    $store: myStore
  });
  app.use($http);

  app.mount('#app');
}

export default createMyApp;
