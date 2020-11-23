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
        this.serveFrontend();
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`);
        });
    }

    private serveFrontend(): void {
        console.log("Serving Frontend...")
        this.app.use(express.static(__dirname + '/public'))
        const router = express.Router();
        router.get('/', function(req, res){
            res.sendFile('index.html', { root: __dirname + '/public' });
        });
        this.app.use("/", router);
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
}