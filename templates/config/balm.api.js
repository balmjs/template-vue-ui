const { appRoot } = require('./env');
const publish = require('./balm.publish');

module.exports = (mix) => {
  if (mix.env.isProd) {
    // For test data
    mix.copy(`${appRoot}/data/*`, 'dist/api');

    // publish(mix);
  } else {
    // For BalmUI iconfonts
    mix.copy('node_modules/balm-ui/fonts/*', `${appRoot}/fonts`);
  }
};
