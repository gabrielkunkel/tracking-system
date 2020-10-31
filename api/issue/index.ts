import { Request, Response, Router } from "express";
import { inject } from "inversify";
import { DbNerveCenter } from "../../contracts/types";
import db from "../../db";
import { Issue } from "../../contracts/database";


export default class issue {

    private _db: db;
    private path = '/issues';
    private router = Router();

    constructor(@inject(db) databbase: db) {
        this._db = databbase;
        this.initializeRoutes();
    }

    public initializeRoutes(): void {
        this.router.get(this.path + '/:id', this.getRecordById);
    }

    getRecordById = async (req: Request, res: Response): Promise<boolean>  => {
        const { rows } = await this._db.query('SELECT * FROM issues WHERE id = $1', [req.params.id]);
      
        res.send(rows.pop());
        return Promise.resolve(true);
    }


}

/* const router = Router();

router.get('/:id', async (req, res) => {
    const { rows } = await db.query('SELECT * FROM issues WHERE id = $1', [req.params.id]);
  
    res.send(rows.pop());
  });

export default router; */