
/** Module dependencies */
const dotenv = require('dotenv')
dotenv.config()
const app = require('../app')

/** Get HTTP server */
const server = require('./server').server

/* Get port from environment and store in Express. */
const port = normalizePort(process.env.PORT || '3001')
app.set('port', port)

/** Listen on provided port, on all network interfaces. */
server.listen(port, (err) => {
    if(err) onError()
    else onListening()
})

/* Normalize a port into a number, string, or false */
function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
  
    if (port >= 0) {
      return port;
    }
  
    return false;
}

/* Event listener for HTTP server "error" event */
function onError(error) {
    try {
      if (error.syscall !== 'listen') {
        throw error;
      }

      var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

      // handle specific listen errors with friendly messages
      switch (error.code) {
        case 'EACCES':
          console.error(`${bind} requires elevated privileges`);
          process.exit(1);
        case 'EADDRINUSE':
          console.error(`${bind} is already in use`);
          process.exit(1);
        default:
          throw error;
      }
    }catch(err){
      throw err
    }
}

/* Event listener for HTTP server "listening" event */
function onListening() {
    try{
      console.info(`Ready on port ${port}`);
    }catch(err){
      throw err
    }
}
