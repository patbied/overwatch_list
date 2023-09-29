import pg from 'pg'
console.log('db pass',process.env.PGPASSWORD)
const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
}

export const pool = new pg.Pool(config)