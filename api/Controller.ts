import { Request, Response, Router } from "express";
import { IDatabase } from "../db/db.contract";

export default class Controller {

    protected _db: IDatabase;
    public path: string;
    public router: Router;

    constructor(path: string, database: IDatabase) {
        this.path = path;
        this.router = Router();
        this._db = database;
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get('/:id', this.getRecordById);
    }

    getRecordById = async (req: Request, res: Response): Promise<boolean>  => {
        const { rows } = await this._db.query('SELECT * FROM issues WHERE id = $1', [req.params.id]);
      
        res.send(rows.pop());
        return Promise.resolve(true);
    }
}