import $http from '@/plugins/http';

export default function usePlugins(app) {
  app.use($http);
}
