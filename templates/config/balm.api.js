const publish = require('./balm.publish');

module.exports = (mix) => {
  if (mix.env.isProd) {
    // For test data
    mix.copy('app/data/*', 'dist/api');

    // publish(mix);
  } else {
    // For BalmUI iconfonts
    mix.copy('node_modules/balm-ui/fonts/*', 'app/fonts');
  }
};
