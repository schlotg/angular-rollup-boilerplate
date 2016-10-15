// checks for a vendor file and builds if it doesn't exist
// This is so the first time 'npm run dev' is called everything just works
// If you make changes to vendor code you need to call 'npm run build-vendor'
const fs = require ('fs');
const exec = require('child_process').exec;
const process = require('process');
const path = require('path');
const filePath = path.join(__dirname, '../dist/vendor.js');

console.log ('Checking if vendor.js needs to be built');
if (!fs.existsSync(filePath)) {
  console.log ('vendor.js does not exist, building vendor.js...');
  exec('npm run build-vendor', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
    process.exit (0);
  });
}
else {
  console.log ('vendor.js already built');
  process.exit (0);
}