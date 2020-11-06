import Server from "./server";
import * as dotenv from 'dotenv';
import IssueController from "./api/IssueController";

dotenv.config();

const server = new Server([
    new IssueController("/issues")
]);

server.listen();