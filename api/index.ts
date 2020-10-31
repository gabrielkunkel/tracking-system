import { Express } from 'express';
import issue from "./issue";

export default (app: Express): void => {
    app.use('/issues', issue);
}