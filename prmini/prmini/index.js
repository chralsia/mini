const app = require('./app');
const http = require('http');

const Note = require('./model/note');
const User = require('./model/user');

const server = http.createServer(app);

server.listen(3000);
console.log("Server listen on port 3000");

const user = new User({
    name: 'Jack'
});
user.save();

const note = new Note({
    name: 'Ann',
    phone: '123456'
});

note.save();