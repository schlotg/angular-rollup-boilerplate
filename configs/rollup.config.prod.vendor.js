import baseConfig from './rollup.config.vendor.js';
import replace from 'rollup-plugin-replace';
import css from 'rollup-plugin-css-only'

const plugins = [
  replace({
    exclude: 'node_modules/**',
    'ENV': JSON.stringify('production')
  }),
  css({ output: 'prod/vendor.css' })
];

const config = Object.assign(baseConfig, {
  dest: 'prod/vendor.es2015.js',
  plugins: Object.assign (baseConfig.plugins, plugins)
});


export default config;