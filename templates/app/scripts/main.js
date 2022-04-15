import Vue from 'vue';
import App from '@/views/layouts/app';
import router from '@/routes';
import BalmUI from 'balm-ui';
import $http from '@/plugins/http';
import myStore from '@/store';

function createMyApp() {
  Vue.config.productionTip = false;

  Vue.use(BalmUI, {
    $store: myStore
  });
  Vue.use($http);

  new Vue({
    el: '#app',
    components: { App },
    template: '<app/>',
    router
  });
}

export default createMyApp;
