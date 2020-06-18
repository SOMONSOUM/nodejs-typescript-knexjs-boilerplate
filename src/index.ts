import express, { Request, Response } from 'express';
import { config } from 'dotenv';
import { routes } from './routes/routes';

const app = express();
config();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(
    `<h1 style='text-align: center; color:blue; font-size: 4rem; margin-top: 10rem;'>All API Resources</h1>`
  );
});
app.use(express.json());
app.use(routes);

app
  .listen(PORT, () =>
    console.log(`🚀Server started on http://localhost:${PORT}`)
  )
  .on('error', (err: any) => console.log(err));
