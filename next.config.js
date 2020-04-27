const withImages = require('next-images');

const debug = process.env.NODE_ENV !== 'NODE_ENV_PRODUCTION';

module.exports = withImages({
    // exportPathMap: function () {
    //     return {
    //         "/": { page: "/" },
    //         "/about": { page: "/about" },
    //     };
    // },
    assetPrefix: !debug ? '/yeovil-college-esports/' : '',
    webpack: (config, options) => {
        config.module.rules = config.module.rules.map(rule => {
            if (rule.loader === 'babel-loader') {
                rule.options.cacheDirectory = false;
            }
            return rule;
        });

        return config;
    }/*,
    webpackDevMiddleware: (config) => {
        // Perform customizations to webpack dev middleware config
        // console.log('webpackDevMiddleware');
        // console.log(config);
        // Important: return the modified config
        return config
  }, */
});