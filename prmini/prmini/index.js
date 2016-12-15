const app = require('./app');
const http = require('http');

const Note = require('./model/note');

const server = http.createServer(app);

server.listen(3000);
console.log("Server listen on port 3000");

