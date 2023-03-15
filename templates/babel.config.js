module.exports = function (api) {
  const envOptions = api.env('production')
    ? {
        modules: false,
        useBuiltIns: 'usage',
        corejs: { version: '3.29', proposals: true }
      }
    : {};
  const runtimeOptions = api.env('production') ? { corejs: 3 } : {};

  return {
    presets: [['@babel/preset-env', envOptions]],
    plugins: [['@babel/plugin-transform-runtime', runtimeOptions]],
    env: {
      test: {
        presets: ['@babel/preset-env']
      }
    }
  };
};
