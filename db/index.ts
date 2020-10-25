import { Pool, QueryResult } from "pg";
import { DbNerveCenter } from "../contracts/types";
import { injectable } from "inversify";

@injectable()
export class pgNerveCenter implements DbNerveCenter {
  
  private readonly _pool: Pool = new Pool();

  public query(text: string, params: any): Promise<QueryResult<any>> {
    return this._pool.query(text, params);
  }

}