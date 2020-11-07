import express from 'express';
import logger from 'morgan';
import Controller from './api/Controller';


export default class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: Controller[], port: number) {
        this.app = express();

        this.port = port || 4000;

        this.initializeMiddleware();
        this.initializeControllers(controllers);
    }

    private initializeMiddleware(): void {
        console.log("Starting Middleware...");
        this.app.use(logger("dev"));
        this.app.use(express.json());
    }

    private initializeControllers(controllers: Controller[]): void {
        console.log("Starting Controllers...");
        controllers.forEach(controller => {
            this.app.use(controller.path, controller.router);
        });
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`);
        });
    }
}