// rollup.config.vendor.js
import alias from 'rollup-plugin-alias';
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import path from 'path';
const home = path.join (__dirname, '../');
import css from 'rollup-plugin-css-only';
const appConfig = require('./app.config.json');
import jetpack from 'fs-jetpack';
let generatedVendor = '';
let generatedVendorExports = '\nexport default {\n';

// generate the vendor.js file
function toCamelCase(str) {
  return str.split('-').reduce((prev, cur, i) => {
    return (!i ? cur : prev + cur[0].toUpperCase() + cur.slice(1, cur.length));
  });
}
appConfig.vendorImports.forEach(file => {
  generatedVendor += `import '${file}';\n`;
});
appConfig.vendorModules.forEach((mod, i) => {
  const name = toCamelCase(mod.replace('/', '_').replace('@','_'));
  generatedVendor += `import * as ${name} from '${mod}';\n`;
  generatedVendorExports += `  ${name}`;
  if (i < (appConfig.vendorModules.length - 1)) { generatedVendorExports += ','; }
  generatedVendorExports += '\n';
});
appConfig.vendorBase.forEach(file => {
  generatedVendor += `import '${file}';\n`;
});
generatedVendor += `${generatedVendorExports}}\n`;
jetpack.write ('app/vendor.ts', generatedVendor);

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
    css({ output: 'dist/vendor.css' }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    })
  ]
}