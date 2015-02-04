var debug = require('debug')('broccoli-middleware');
var broccoli = require('broccoli');
var Watcher = require('broccoli/lib/watcher');
var middleware = require('broccoli/lib/middleware');

var tree = broccoli.loadBrocfile();
var builder = new broccoli.Builder(tree);
var watcher = new Watcher(builder);

module.exports = function (options) {
  options = options || {};

  if (options.useLiveReload) {
    var tinylr = require('tiny-lr'),
        port = options.liveReloadPort || 35729,
        livereloadServer = new tinylr.Server();

    livereloadServer.listen(port, function (err) {
      if (err) {
        throw err;
      } else {
        debug('tiny-lr listening on', port);
      }
    });

    watcher.on('change', function (results) {
      debug('deteched change, reloading clients');
      livereloadServer.changed({
        body: {
          files: ['dummy']
        }
      });
    })
  }

  return middleware(watcher);
};

