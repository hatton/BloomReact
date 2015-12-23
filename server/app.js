import express from 'express'
import historyApiFallback from 'connect-history-api-fallback'
import config from '../config'

const app = express()
const debug = require('debug')('app:server')
const paths = config.utils_paths

app.get('/api/booksInCollection', function (req, res) {
  res.send( JSON.stringify([{title:'Moby Dick', id:'1'}, {title:"Sons of Athena", id:'2'}, {title:"Cryptonomicon", id:'3'}, {title: "Superluminal", id:'4'}]));
});

app.get('/api/sourceBooks', function (req, res) {
  res.send( JSON.stringify([{title:'Basic Book', id:'1'}, {title:"Decodable Reader", id:'2'}]));
});

app.use(historyApiFallback({
  verbose: false
}))

// Serve app with Webpack if HMR is enabled
if (config.compiler_enable_hmr) {
  const webpack = require('webpack')
  const webpackConfig = require('../build/webpack.config')
  const compiler = webpack(webpackConfig)

  // Serve static assets from ~/src/static since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(express.static(paths.client('static')))

  // Enable webpack-dev-server middleware
  app.use(require('./middleware/webpack-dev')({
    compiler,
    publicPath: webpackConfig.output.publicPath
  }))
  app.use(require('./middleware/webpack-hmr')({ compiler }))
} else {
  debug(
    'Application is being run outside of development mode. This starter kit ' +
    'does not provide any production-specific server functionality. To learn ' +
    'more about deployment strategies, check out the "deployment" section ' +
    'in the README.'
  )

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(express.static(paths.base(config.dir_dist)))
}

export default app
