const webpack = require('webpack');
const withOptimizedImages = require('next-optimized-images');

const debug = process.env.NODE_ENV !== 'production';

// Modify the true value VVVV if deploying to GitHub Pages
const URL_ROOT = !debug ? '' : '';

module.exports = withOptimizedImages({
    exportPathMap: () => {
        return {
            "/": { page: "/" }
        };
    },
    assetPrefix: URL_ROOT,
    webpack: (config, options) => {
        console.log("Building webpack config...");

        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.URL_ROOT': JSON.stringify(URL_ROOT)
            })
        );

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