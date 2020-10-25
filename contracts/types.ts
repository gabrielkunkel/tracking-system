import { QueryResult } from "pg";

interface DbNerveCenter {
    query: (text: string, params: unknown) => Promise<QueryResult<any>>
}

export { DbNerveCenter };