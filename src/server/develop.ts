import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';

//leave it as require on purpose
const config = require('../../webpack.config');
config.mode = 'development';

const compiler = webpack(config);

const dev = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
});
const hot = webpackHotMiddleware(compiler);

export { dev, hot };
