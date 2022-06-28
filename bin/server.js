var http = require('http');
var app = require('../app');

/**  Create HTTP server */
const server = http.createServer(app)

module.exports.server = server
