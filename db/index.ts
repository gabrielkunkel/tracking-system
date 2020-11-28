import { Pool, QueryResult, QueryResultRow } from "pg";
import { IDatabase } from "./db.contract";

export default class Database implements IDatabase {
  
  private readonly _pool: Pool = new Pool();

  public query(text: string, params: string[]): Promise<QueryResult<QueryResultRow[]>> {
    return this._pool.query(text, params);
  }

}