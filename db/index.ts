import { Pool, QueryResult, QueryResultRow } from "pg";
import { DbNerveCenter } from "../contracts/database";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export default class pgNerveCenter implements DbNerveCenter {
  
  private readonly _pool: Pool = new Pool();

  public query(text: string, params: string[]): Promise<QueryResult<QueryResultRow[]>> {
    return this._pool.query(text, params);
  }

}