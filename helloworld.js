http = require("http");

http.createServer(function (request, response) {

// Send the HTTP header

// HTTP Status: 200 : OK

// Content Type: text/plain

response.writeHead(200, {'Content-Type': 'text/plain'});

// Send the response body as "Hello World"

response.end('Hello World');

console.log(request.url)

}).listen(4001);

// Console will print the message

console.log('Server running at http://129.213.54.196:4001/');
