const http = require('http');
const { config } = require('dotenv');
config();
const PORT = process.env.PORT;

const square = (x) => console.log(x * x);

http
  .createServer((req, res) => {
    res.end('Hello, World!');
  })
  .listen(PORT, () => console.log(`🚀http://localhost:${PORT}`));
