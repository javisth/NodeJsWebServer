const http = require('http');
const { body, validationResult } = require('express-validator');
const { sanitizeBody } = require('express-validator');

const hostname = '127.0.0.1';
const port = 1337;

const server = http.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World\n');
});

server.listen(port, hostname, () => {
	console.log('Server running at http://${hostname}:${port}/');
});
