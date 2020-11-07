import { Request, Response, Router } from "express";
import db from "../db";
import DIContainer from "../inversify.config";

export default class Controller {

    protected _db: db;
    public path: string;
    public router: Router;

    constructor(path: string) {
        this.path = path;
        this.router = Router();
        this._db = DIContainer.resolve(db);
        this.initializeRoutes();
    }

    public initializeRoutes(): void {
        this.router.get('/:id', this.getRecordById);
    }

    getRecordById = async (req: Request, res: Response): Promise<boolean>  => {
        const { rows } = await this._db.query('SELECT * FROM issues WHERE id = $1', [req.params.id]);
      
        res.send(rows.pop());
        return Promise.resolve(true);
    }
}