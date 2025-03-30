import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function loadAllEvents(){
    const result = await sql("select * from users");
    return result
}

