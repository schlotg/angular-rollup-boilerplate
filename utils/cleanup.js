const jetpack = require('fs-jetpack');

// cleanup unnecessary files
jetpack.find('dist', {
    matching: [ '*es2015*']
})
.forEach(jetpack.remove);