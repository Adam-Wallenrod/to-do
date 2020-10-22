

const express = require( "express" );
const hostname = 'localhost';
const port = 3000;
const server = express();


server.get('/', (req, res) => {
  res.send('Hello world!');
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
