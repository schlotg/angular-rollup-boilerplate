# Angular 2 Rollup Boiler Plate

## Installing

Clone, download the zip, or fork this project. In the project's directory:

  ```
   npm install
   npm run build-all
   npm run dev
  ```

## Why does the world need yet another Angular 2 boilerplate?

This a public project that I use to start my Angular 2 projects. This project has minimal Angular 2 code that displays 'Hello World' but also has the folowing features built in:

- Uses [Rollup](https://github.com/rollup/rollup) to package everything
- Packages 3rd party libraries seperately from application code. 3rd party libraries are packed into vendor.js and the app code is packed into app.js
- Uses TypeScript as the authoring language but compiles everything down to ES5 browser compatible code
- In development, app code changes automatically trigger compiles and packing. Changes are then pushed out to the application browser window
- Uses TSLint to lint code on the fly as your developing
- Build scripts for production builds that minify the bundles
- Integrated testing scripts and framework (coming soon)
- Support for bundling CSS

## Acknowlegements

Much of the code is taken from the [Angular 2 Quickstart tutorial](https://angular.io/docs/ts/latest/quickstart.html) and the awesome [Angular 2 Bundling with Rollup tutorial](https://medium.com/@jonnysamps/angular-2-bundling-with-rollup-4738d0148a2c#.7fc9ox9r6) by Jonathon Samples. I also found the [Rollup Quickstart Tutorial](https://github.com/rollup/rollup/wiki/Quickstart-Tutorial) very helpful.

## Worth Noting

I chose Rollup as a packager because Webpack required a ton of configuration to just to get a simple Angular 2 app off the ground. Rollup seems to do a better job of packaging the code and eliminating unused blocks. Rollup was also a lot easier to understand and much simpler to configure. I also noticed that the [Ionic team is using it and seem to be really impressed with it](http://blog.ionic.io/announcing-the-ionic-2-release-candidate/)

For linting I am using [TSlint](https://github.com/palantir/tslint) and the linting configuration found in the Angular 2 Quickstart [tutorial](https://angular.io/docs/ts/latest/quickstart.html). I would love to see a project like the Airbnb lint configuration that is maintained for TSLint but I have so far been unable to find one.

## Production builds

My approach for production / release builds is that I always serve out of the dist directory. But it is in the .gitignore so it is never checked in. This is to prevent constant checkins of that folder during development.
However, I do think it is important to checkin a production build so the resulting files are stored in the production folder and copied to the dist folder when doing a 'build-prod'. When running and deploying live in production, you will want to run prod.finalize.js to copy the production version of the bundled files into dist/ .

## Commands

There are many built in commands in package.json:scripts. I am a big fan of using npm's built in task running functionality so I have avoided using Gulp or Grunt. Life is so much simpler if you only use one package manager, so all the packages are managed by npm.
If your not familiar with using npm as a task runner. You can execute anyone of the commands in package.json:scripts by typing 'npm run <command>' . Here is a quick summary of the current commands:

- test: Launch the testing framework (comming soon)
- build-vendor: Builds the vendor bundle
- build-prod-vendor: Builds the vendor bundle but also minifies it and stores the result in prod/
- build-app: Builds the app bundle
- build-prod-app: Builds the app bundle but also minifies it and stores the result in prod/
- build-all: Builds both the vendor and the app bundles
- build-prod: Builds both the vendor and app bundles in production, minifies them, and then copies them to dist/
- minify-vendor: Runs the minify step on the production vendor bundle (vendor.js)
- minify-bundle: Runs the minify step on the production app bundle (app.js)
- lint: runs the linter on the app directory
- dev: runs the linter, builds the app in development, launches a file watcher that rebuilds the app on file changes in app/ and launches a dev server that auto reloads on changes
- serve: starts a server only

## Adding 3rd party modules

For a full featured website I generally drop in [Bootstrap](https://ng-bootstrap.github.io/#/home) and [Font Awesome](http://fontawesome.io/)

### Adding Bootstrap

...Coming Soon

### Adding Font Awesome

...Coming Soon

### Adding other 3rd party libraries

...Coming Soon