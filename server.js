const http = require('http');
const app = require('./app');

const port =  4000;

const server = http.createServer(app);

console.log('Node Connected..');

server.listen(port);