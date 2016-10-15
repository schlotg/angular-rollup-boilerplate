// rollup.config.vendor.js
import alias from 'rollup-plugin-alias';
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
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
  entry: 'app/vendor.ts',
  dest: 'dist/vendor.es2015.js',
  format: 'iife',
  moduleName: 'vendor',
  plugins: [
    typescript(),
    rollupNG2(),
    resolve({ jsnext: true,
      main: true,
      browser: true
    }
   )
 ]
}