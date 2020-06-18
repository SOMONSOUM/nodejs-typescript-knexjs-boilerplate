import express from 'express';
import { config } from 'dotenv';
const app = express();
config();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`<h1 style='text-align: center; color:blue;'> Hello, World!</h1>`);
});

app
  .listen(PORT, () =>
    console.log(` 🚀Server started on http://localhost:${PORT}`)
  )
  .on('error', (err: any) => console.log(err));
