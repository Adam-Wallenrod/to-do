const express = require( "express" );
const hostname = 'localhost';
const port = 3000;
const server = express();


server.get('/api/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello world!');
});

server.listen(port, hostname,() => {
  // connect to the DB
  console.log(`Server running at http://${hostname}:${port}/`);
});
