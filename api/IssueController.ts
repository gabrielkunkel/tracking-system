import { IDatabase } from "../db/db.contract";
import Controller from "./Controller";


export default class IssueController extends Controller {

    constructor(path: string, db: IDatabase) {
        super(path, db);
    }

}