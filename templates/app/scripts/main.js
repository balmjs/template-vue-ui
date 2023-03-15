import Vue from 'vue';
import App from '@/views/layouts/app';
import router from '@/routes';
import BalmUI from 'balm-ui';
// import BalmUIPlus from 'balm-ui-plus';
import $http from '@/plugins/http';
import { balmUIConfig, balmUIPlusConfig } from '@/config/components';

function createMyApp() {
  Vue.config.productionTip = false;

  app.use(BalmUI, balmUIConfig);
  // Vue.use(BalmUIPlus, balmUIPlusConfig);
  Vue.use($http);

  new Vue({
    el: '#app',
    components: { App },
    template: '<app/>',
    router
  });
}

export default createMyApp;
