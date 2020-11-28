import App from "./app";
import * as dotenv from 'dotenv';
import IssueController from "./api/IssueController";
import Database from "./db";

dotenv.config();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const portNumber = parseInt(process.env.PORT!);

const database = new Database();

const server = new App([
    new IssueController("/issues", database)
], portNumber);

server.listen();