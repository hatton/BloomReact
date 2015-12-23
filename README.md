Bloom React
=======================

This is an experiment in re-imagining Bloom with a pure reactjs-based web front-end. This project is forked from react-redux-starter-kit, and most of what follows is selected from that ReadMe:

Getting Started
---------------

Clone the repo and install the necessary node modules:

```shell
$ git clone https://github.com/davezuko/react-redux-starter-kit.git
$ cd BloomReact
$ npm install                   # Install Node modules listed in ./package.json (may take a while the first time)
$ npm start                     # Compile and launch
```
Now open a browser to localhost:3000

Other ways to start
-------------------

* `npm start` - Spins up express server to serve your app at `localhost:3000`. HMR will be enabled in development.
* `npm run compile` - Compiles the application to disk (`~/dist` by default).
* `npm run dev:nw` - Same as `npm start`, but opens the redux devtools in a new window.
* `npm run dev:no-debug` - Same as `npm start` but disables redux devtools.
* `npm run test` - Runs unit tests with Karma and generates a coverage report.
* `npm run test:dev` - Runs Karma and watches for changes to re-run tests; does not generate coverage reports.
* `npm run deploy`- Runs linter, tests, and then, on success, compiles your application to disk.
* `npm run lint`- Lint all `.js` files.
* `npm run lint:fix` - Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).

### Components vs. Views vs. Layouts

 A **Layout** is something that describes an entire page structure. Currently we only have the main Bloom tabbed app here, but in the future things like the set up wizard could be layouts. **Views** are components that live at routes; currently we have CollectionsTab, EditTab, and PublishTab here. **Components** are then dumb component. Likely this organization will not scale, and we'll need to group components under the views that use them.


### Paths
Webpack is configured to make use of [resolve.root](http://webpack.github.io/docs/configuration.html#resolve-root), which lets you import local packages as if you were traversing from the root of the `src` directory. Here's an example:

```js
// current file: ~/src/views/some/nested/View.js

// What used to be this:
import SomeComponent from '../../../components/SomeComponent'

// Can now be this:
import SomeComponent from 'components/SomeComponent' // Hooray!
```

Server
------

Currently we have the Express server that came with the starter kit. We have added some static api endpoints to id.

Testing
-------

To add a unit test, simply create a `.spec.js` file anywhere in `~/tests`. Karma will pick up on these files automatically, and Mocha and Chai will be available within your test without the need to import them.

Coverage reports will be compiled to `~/coverage` by default. If you wish to change what reporters are used and where reports are compiled, you can do so by modifying `coverage_reporters` in `~/config/_base.js`.
