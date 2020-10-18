import { Pool, QueryResult } from "pg";

const pool = new Pool()

module.exports = {
  query: (text: string, params: any, callback: (err: Error, result: QueryResult<any>) => void) => {
    return pool.query(text, params, callback)
  },
  
}