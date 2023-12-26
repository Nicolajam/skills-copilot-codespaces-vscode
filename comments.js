const http = require('http');

// Remove the duplicate declaration of 'server'
// const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!');
// });

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});

// Path: comments.js
const http = require('http');

// Remove the duplicate declaration of 'hostname'
// Remove the duplicate declaration of 'server'
// Remove the duplicate declaration of 'server'
// Remove the duplicate declaration of 'server'
// Remove the duplicate declaration of 'server'
const server = http.createServer((req, res) => { // 1
    res.statusCode = 200; // 2
    res.setHeader('Content-Type', 'text/plain'); // 3
    res.end('Hello, world!'); // 4
});

server.listen(port, hostname, () => { // 5
    console.log(`Server running at http://${hostname}:${port}/`); // 6
});

// 1. The createServer() method creates the HTTP server.
// 2. The statusCode property sets the HTTP status code to 200, which means that all is OK.
// 3. The setHeader() method sets an HTTP header with the content type.
// 4. The end() method ends the response process.
// 5. The server is listening on port 3000.
// 6. The hostname and port the server is running on is logged to the console.

// Path: comments.js
const http = require('http');

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// 1. The createServer() method creates the HTTP server.
// 2. The statusCode property sets the HTTP status code to 200, which means that all is OK.
// 3. The setHeader() method sets an HTTP header with the content type.
// 4. The end() method ends the response process.
// 5. The server is listening on port 3000.
// 6. The hostname and port the server is running on is logged to the console.

// Path: comments.js
const http = require('http'); // 1

const hostname = 'localhost'; // 2
const port = 3000; // 3

// Remove the duplicate declaration of 'server'
// Remove the duplicate declaration of 'server'
// Remove the duplicate declaration of 'server'
// Remove the duplicate declaration of 'server'


server.listen(port, hostname, () => {
    // Function body
});
