# Angular 2 Rollup Boilerplate

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

I am using this version of [Angular 2 Bootstrap](https://github.com/ng-bootstrap/ng-bootstrap)

- Install the CSS for Bootstrap: `npm install bootstrap --save-dev`
- Add this package's CSS to the vendor.css. In app/vendor.ts: `import '../node_modules/bootstrap/dist/css/bootstrap.min.css';`
- Install the Angular 2 bindings: `npm install @ng-bootstrap/ng-bootstrap --save-dev`
- In app/app.module.ts add this line near the top of the file: `import {NgbModule} from '@ng-bootstrap/ng-bootstrap';`
- In the imports array of @NgModule add this element: `NgbModule.forRoot()`
- In app/vendor.ts add this line near the top: `import * as _ngb_module from '@ng-bootstrap/ng-bootstrap';`
- In that same file this element to the default exports: `_ngb_module`
- In configs/rollup.config.js, in the external array, add this element: `@ng-bootstrap/ng-bootstrap`
- In that same file in the globals array add this element: `'@ng-bootstrap/ng-bootstrap': 'vendor._ngb_module'`
- Finally, rebuild all your bundles by running: `npm run build-all`

*** If you use the bootstrap-font-awesome branch it is already configured to work with Bootstrap and Font Awesome

### Adding Font Awesome

- Install the Font Awesome library: `npm install font-awesome --save-dev`
- Make sure it gets packaged in vendor.css by add this to app/vendor.ts:

  `import '../node_modules/font-awesome/css/font-awesome.min.css';`

- Font awesome tries to load font files so make sure the are copied to the dist directory. Add this entry to package.json:
```
  {
    src: 'node_modules/font-awesome/fonts',
    dest: 'dist/fonts'
  }
```

- Build and package all the assets: `npm run build-all`

*** If you use the bootstrap-font-awesome branch it is already configured to work with Bootstrap and Font Awesome

### Adding other 3rd party libraries

Most 3rd party libraries you will want to add to the vendor bundle. To make it easier to add libraries app/vendor.ts
you add assets by adding them as entries in the app.config.json. Here are the different sections and what they do:

- filesToCopy: This section specifies assets to copy into the dist directory. They can be single files or directories
- vendorModules: This section specifies vendor modules. These are imported into the vendor bundle and exported so that the bundle can use them
- vendorBase: This section specifies files that need to be imported into the vendor bundle to make other vendor libraries work but don't need to be exported
- vendorImports: This section specifies files that are bundled in but aren't libraies such as css files.

Adding ngBootstrap is a great example of adding 3rd party libraries to the project. It contains code, requires delcaring it as module, and contains css. Using it is an example, should allow you to integrate any other 3rd party library you might need.
The only tricky part is figuring out the paths to some of the assets and that is just a simple matter of opening up the NPM module's folder and looking at where the assets are installed.