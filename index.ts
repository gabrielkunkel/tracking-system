import App from "./app";
import * as dotenv from 'dotenv';
import IssueController from "./api/IssueController";

dotenv.config();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const portNumber = parseInt(process.env.PORT!);

const server = new App([
    new IssueController("/issues")
], portNumber);

server.listen();