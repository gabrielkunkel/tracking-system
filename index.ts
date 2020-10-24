import express from 'express';
import logger from 'morgan';
import * as dotenv from 'dotenv';
import routes from "./routes";

dotenv.config();

const app = express();

routes(app);

const PORT = process.env.PORT || 4000;

app.use(logger("dev"));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});