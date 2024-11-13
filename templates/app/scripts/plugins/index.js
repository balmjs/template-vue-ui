import $http from '@/plugins/http';
import $mock from '@/plugins/mock';

export default function usePlugins(Vue) {
  Vue.use($http);
  Vue.use($mock);
}
