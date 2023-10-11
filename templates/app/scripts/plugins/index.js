import $http from '@/plugins/http';

export default function usePlugins(Vue) {
  Vue.use($http);
}
