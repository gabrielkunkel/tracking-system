import express from 'express';
import logger from 'morgan';

const app = express();
const PORT = 8000;

function runMeEverytime(req: express.Request, res: express.Response, next: any) {
  console.log("I run every time!!");
  next();
}

app.use(runMeEverytime);
app.use(logger("dev"));
app.use(express.json());

app.get('/', (req, res) => res.json({ messsage: 'I rule!'}));

app.post('/', (req, res) => {
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});