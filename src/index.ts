import express, { Request, Response, NextFunction } from 'express';
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

// Catch alll errors
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

app.use((req: Request, res: Response) => {
  if (res.status(404)) {
    return res.json({ error: 'Not Found' });
  }
});

app
  .listen(PORT, () =>
    console.log(`🚀Server started on http://localhost:${PORT}`)
  )
  .on('error', (err: any) => console.log(err));
