import 'newrelic';
import loopback from 'loopback';
import boot from 'loopback-boot';
// import { loggerFactory } from '@connections/utils-logger';

// const logger = loggerFactory();
let server;
const app = (module.exports = loopback());
app.start = () =>
  // start the web server
  (server = app.listen(() => {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    console.info('Web server listening at: %s', baseUrl);
    /* istanbul ignore next */
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      console.info('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  }));

app.stop = () => {
  server.close();
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
const options = {
  appRootDir: `${__dirname}/config`,
  bootDirs: [`${__dirname}/boot`],
};

boot(app, options, err => {
  /* istanbul ignore if */
  if (err) throw err;

  /* istanbul ignore if */
  if (require.main === module) {
    app.start();
  }
});
