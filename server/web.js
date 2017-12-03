const path = require('path');
const server = require('itsjoekent-server');

const app = server
  .makeApp()
  .public('/public', path.join(__dirname, '../public'))
  .gzip('/public/dist/', true)
  .spa(`${__dirname}/template.html`)
  .listen()
  .app;
