const jetpack = require('fs-jetpack');

// cleanup unnecessary files
jetpack.find('dist', {
    matching: [ '*es2015*']
})
.forEach(jetpack.remove);

// now copy the production files over
const filesToCopy = [
    { src: 'app/index.html', dest: 'dist/index.html' },
    { src: 'prod/bundle.js', dest: 'dist/bundle.js' },
    { src: 'prod/vendor.js', dest: 'dist/vendor.js' },
    { src: 'prod/bundle.js.map', dest: 'dist/bundle.js.map' }
].forEach(function (file){
    jetpack.copy(file.src, file.dest, { overwrite: true });
});
