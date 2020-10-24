import { Pool, QueryResult } from "pg";

const pool = new Pool();

interface NerveCenter {
  query: (text: string, params: any) => Promise<QueryResult<any>>
};

const pgNerveCenter: NerveCenter = {
  query: (text: string, params: any): Promise<QueryResult<any>> => pool.query(text, params)
}

export default pgNerveCenter;