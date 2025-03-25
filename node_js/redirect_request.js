//Redirect by request

const http = require('http');
const route = require('./route');

//Send a response
const server = http.createServer(route);
server.listen(3000);