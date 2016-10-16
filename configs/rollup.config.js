// rollup.config.js
import alias from 'rollup-plugin-alias';
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import css from 'rollup-plugin-css-only'
import path from 'path';
const home = path.join (__dirname, '../');
import fs from 'fs';

// copy index.html into the dist dir
fs.createReadStream(`${home}/app/index.html`).pipe(fs.createWriteStream(`${home}/dist/index.html`));

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
    typescript(),
    rollupNG2(),
    alias({ rxjs: home + '/node_modules/rxjs-es' }),
    css({ output: 'dist/bundle.css' }),
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
