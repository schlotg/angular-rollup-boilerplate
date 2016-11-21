const jetpack = require('fs-jetpack');

// cleanup unnecessary files
jetpack.find('dist', {
    matching: [ '*es2015*']
}).forEach((file) => {
  if (file.indexOf('map') === -1) {
    jetpack.remove(file);
  }
});