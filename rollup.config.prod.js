import baseConfig from './rollup.config.js';
import replace from 'rollup-plugin-replace';

const plugins = [
  replace({
    exclude: 'node_modules/**',
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
];

const config = Object.assign (baseConfig, {
  dest: 'prod/bundle.es2015.js',
  plugins: baseConfig.plugins.concat (plugins)
});

export default config;