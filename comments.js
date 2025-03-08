//Create web server
var http = require('http');
// Create web server
var server = http.createServer(function (req, res) {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/html' });
  // Set the response HTTP header with HTTP status and Content type
  res.end('Hello World\n');
});
// Listen on port 3000, IP defaults to