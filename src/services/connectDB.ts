import { Pool } from "pg";
export const pool = new Pool({
    user: "postgres",
    password: "Cybesco19952023",
    host: "localhost",
    port: 5432,
    database: "postgres"
});

export async function connectDataBase() {
    await pool.connect().then(()=>{
        console.log("Database connected.")
    })
}

