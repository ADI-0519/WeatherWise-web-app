import NextAuth from "next-auth";
import NeonAdapter from "@auth/neon-adapter";
import { Pool } from "@neondatabase/serverless";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Facebook from "next-auth/providers/facebook";


const dbUrl = process.env.DATABASE_URL!;

export const { auth, handlers, signIn, signOut } = NextAuth(() => {
    const pool = new Pool({connectionString: dbUrl  })
    return {
        providers: [
            Google,
            GitHub,
            Facebook
        ],
        adapter: NeonAdapter(pool)
    }
    
})