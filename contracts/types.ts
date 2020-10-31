import { QueryResult, QueryResultRow } from "pg";

interface DbNerveCenter {
    query: (text: string, params: string[]) => Promise<QueryResult<QueryResultRow[]>>
}

export { DbNerveCenter };