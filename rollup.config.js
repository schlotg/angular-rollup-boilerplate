// rollup.config.js
import alias from 'rollup-plugin-alias';
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';

class RollupNG2 {
  constructor(options){
    this.options = options;
  }
  resolveId(id, from){
    if(id.startsWith('rxjs/')){
      return `${__dirname}/node_modules/rxjs-es/${id.replace('rxjs/', '')}.js`;
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
    alias({ rxjs: __dirname + '/node_modules/rxjs-es' }),
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
