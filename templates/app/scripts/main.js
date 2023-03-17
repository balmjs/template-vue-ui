import { createApp } from 'vue';
import App from '@/views/layouts/app';
import router from '@/routes';
import BalmUI from 'balm-ui';
import BalmUIPlus from 'balm-ui-plus';
import $http from '@/plugins/http';
import { balmUIConfig, balmUIPlusConfig } from '@/config/components';

function createMyApp() {
  const app = createApp(App);

  app.use(router);
  app.use(BalmUI, balmUIConfig);
  app.use(BalmUIPlus, balmUIPlusConfig);
  app.use($http);

  app.mount('#app');
}

export default createMyApp;
