const debug = process.env.NODE_ENV !== 'NODE_ENV_PRODUCTION';

module.exports = {
    'process.env.URL_ROOT': !debug ? '/yeovil-college-esports' : ''
};