if (process.env.NODE_ENV === 'production') {
  const cluster = require('cluster');
  const numCPUs = require('os').cpus().length;

  if (cluster.isMaster) {
    for (let index = 0; index < numCPUs; index++) {
      cluster.fork();
    }
  } else {
    require('./web');
  }
} else {
  require('dotenv').config();
  require('./web');
}
