const { appRoot, localResolve, globalResolve } = require('./env');

module.exports = {
  vue$: 'vue/dist/vue.esm.js',
  'balm-ui-plus$': 'balm-ui/dist/balm-ui-plus.js',
  miragejs$: 'miragejs/dist/mirage-esm.js',
  '@mock-server': localResolve('mock-server'),
  '@': localResolve(`${appRoot}/scripts`)
};
