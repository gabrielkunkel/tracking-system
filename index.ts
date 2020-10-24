import express from 'express';
import logger from 'morgan';
import * as dotenv from 'dotenv';
import db from './db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

function runMeEverytime(req: express.Request, res: express.Response, next: any) {
  console.log("I run every time!!");
  next();
}

app.use(runMeEverytime);
app.use(logger("dev"));
app.use(express.json());

app.get('/', (req, res) => res.json({ messsage: 'I rule!'}));

app.get('/:id', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM issues WHERE id = $1', [req.params.id]);

  res.send(rows[0]);
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});