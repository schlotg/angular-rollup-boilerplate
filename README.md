# Angular2 Rollup Boiler Plate

## Why does the world need yet another Angular 2 boilerplate?

This a public project that I use to start my Angular 2 projects. This project has minimal Angular 2 code that displays 'Hello World' but also has the folowing features built in:

- Uses [Rollup](https://github.com/rollup/rollup) to package everything
- Packages 3rd party libraries seperately from application code
- Uses TypeScript as the authoring language but compiles everything down to ES5 browser compatible code
- In development, app code changes automatically trigger compiles and packing. Changes are then pushed out to the application browser window
- Uses TSLint to lint code on the fly as your developing
- Build scripts for production builds that minify the bundles (coming soon)
- Integrated testing scripts and framework (coming soon)
- Support for bundling CSS (coming soon)

## Acknowlegements

Much of the code is taken from the [Angular 2 Quickstart tutorial](https://angular.io/docs/ts/latest/quickstart.html) and the awesome [Angular 2 Bundling with Rollup tutorial](https://medium.com/@jonnysamps/angular-2-bundling-with-rollup-4738d0148a2c#.7fc9ox9r6) by Jonathon Samples

## Worth Noting

I chose Rollup as a packager because Webpack required a ton of configuration to just to get a simple Angular 2 app off the ground. Rollup semms to do a better job of packaging the code and eliminating unused blocks. Rollup was also a lot easier to understand and much simpler to configure. I also noticed that the [Ionic team is using it and seem to be really impressed with it](http://blog.ionic.io/announcing-the-ionic-2-release-candidate/)

For linting I am using [TSlint](https://github.com/palantir/tslint) and the linting configuration found in the Angular 2 Quickstart [tutorial](https://angular.io/docs/ts/latest/quickstart.html). I would love to see a project like the Airbnb lint configuration that is maintained for TSLint but I have so far been unable to find one.

## Adding 3rd party modules

For a full featured website I generally drop in [Bootstrap](https://ng-bootstrap.github.io/#/home) and [Font Awesome](http://fontawesome.io/)

### Adding Bootstrap

...Coming Soon

### Adding Font Awesome

...Coming Soon

### Adding other 3rd party libraries

...Coming Soon