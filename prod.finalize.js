const jetpack = require('fs-jetpack');

// delete all the files in dist
jetpack.find('dist', {
    matching: '**'
})
.forEach(jetpack.remove);

// cleanup unnecessary files
jetpack.find('prod', {
    matching: [ '*es2015*', '*min*']
})
.forEach(jetpack.remove);

// now copy the production files over
const filesToCopy = [
    { src: 'prod/bundle.js', dest: 'dist/bundle.js' },
    { src: 'prod/vendor.js', dest: 'dist/vendor.js' } /* ,
    { src: 'prod/bundle.js.map', dest: 'dist/bundle.js.map' } */
].forEach(function (file){
    jetpack.copy(file.src, file.dest, { overwrite: true });
});
