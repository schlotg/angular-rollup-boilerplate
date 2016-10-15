// rollup.config.js
import alias from 'rollup-plugin-alias';
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

// PostCSS plugins
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';
import path from 'path';
const home = path.join (__dirname, '../');


class RollupNG2 {
  constructor(options){
    this.options = options;
  }
  resolveId(id, from){
    if(id.startsWith('rxjs/')){
      return `${home}/node_modules/rxjs-es/${id.replace('rxjs/', '')}.js`;
    }
  }
}
const rollupNG2 = (config) => new RollupNG2(config);

export default {
  entry: 'app/main.ts',
  dest: 'dist/bundle.es2015.js',
  format: 'iife',
  sourceMap: true,
  plugins: [
    postcss({
      plugins: [
        simplevars(),
        nested(),
        cssnext({ warnForDuplicates: false, }),
        cssnano(),
      ],
      extensions: [ '.css' ]
    }),
    typescript(),
    rollupNG2(),
    alias({ rxjs: home + '/node_modules/rxjs-es' }),
    resolve({ jsnext: true,
      main: true
    }
   )
 ],
 // This is how you exclude code from the bundle
  external: [
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/forms'
  ],
  // This is how you link the referenced module ids to the
  // global variables exposed by the vendor bundle.
  globals: {
    '@angular/core': 'vendor._angular_core',
    '@angular/common': 'vendor._angular_common',
    '@angular/compiler': 'vendor._angular_compiler',
    '@angular/http': 'vendor._angular_http',
    '@angular/platform-browser': 'vendor._angular_platformBrowser',
    '@angular/platform-browser-dynamic': 'vendor._angular_platformBrowserDynamic',
    '@angular/forms': 'vendor._angular_forms'
  }
}
