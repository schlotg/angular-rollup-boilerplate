// rollup.config.js
import alias from 'rollup-plugin-alias';
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import css from 'rollup-plugin-css-only'
import path from 'path';
const home = path.join (__dirname, '../');
import jetpack from 'fs-jetpack';
const appConfig = require('./app.config.json');

// copy file list
const files = appConfig.filesToCopy || [];
files.forEach ((e) => {
  if (jetpack.exists(path.dirname(`${home}${e.dest}`)) === false) {
    console.log ('making directorty');
    jetpack.dir(path.dirname(`${home}${e.dest}`));
  }
  jetpack.copy(`${home}${e.src}`, `${home}${e.dest}`, { overwrite: true });
});

let external = [];
let globals = {};

function toCamelCase(str) {
  return str.split('-').reduce((prev, cur, i) => {
    return (!i ? cur : prev + cur[0].toUpperCase() + cur.slice(1, cur.length));
  });
}

const modules = appConfig.vendorModules || [];
modules.forEach (module => {
  external.push (module);
  const name = module.replace('/', '_').replace('@','_');
  globals[module] = `vendor.${toCamelCase(name)}`;
});

export default {
  entry: 'app/main.ts',
  dest: 'dist/bundle.es2015.js',
  format: 'iife',
  sourceMap: true,
  plugins: [
    typescript(),
    alias({ rxjs: home + '/node_modules/rxjs-es' }),
    css({ output: 'dist/bundle.css' }),
    resolve({
      jsnext: true,
      main: true
    }
   ),
   replace({
    exclude: 'node_modules/**',
    'ENV': JSON.stringify('development')
  }),
 ],

 // This is how you exclude code from the bundle
  external,
  // This is how you link the referenced module ids to the
  // global variables exposed by the vendor bundle.
  globals
}


