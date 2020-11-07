declare namespace NodeJS {
    export interface ProcessEnv {
        PORT: string,
        PGUSER: string,
        PGHOST: string,
        PGPASSWORD: string,
        PGDATABASE: string,
        PGPORT: string
    }
  }