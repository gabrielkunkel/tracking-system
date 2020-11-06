import express from 'express';
import logger from 'morgan';
import Controller from './api/Controller';
import { process } from './contracts/env';

export default class Server {
    public server: express.Application;
    public port: number;

    constructor(controllers: Controller[], port?: number) {
        this.server = express();

        this.port = port || process.env.PORT || 4000;

        this.initializeMiddleware();
        this.initializeControllers(controllers);
    }

    private initializeMiddleware(): void {
        this.server.use(logger("dev"));
        this.server.use(express.json());
    }

    private initializeControllers(controllers: Controller[]): void {
        controllers.forEach(controller => {
            this.server.use(controller.path, controller.router);
        });
    }

    public listen(): void {
        this.server.listen(this.port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`);
        });
    }
}