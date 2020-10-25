import { QueryResult } from "pg";

interface DbNerveCenter {
    query: (text: string, params: string[]) => Promise<QueryResult<any>>
}

export { DbNerveCenter };