// db/client.ts
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as dotenv from 'dotenv';
import { blogs } from './schema';
import { donations } from './schema';
import { helpline } from './schema';
// Load environment variables from .env file
dotenv.config({ path: '.env.local' });
// Ensure this code only runs on the serve\
console.log(process.env.DATABASE_URL);
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in the environment variables.');
}

const neonClient = neon(process.env.DATABASE_URL);
export const db = drizzle(neonClient, { schema: { blogs } });

export { blogs };

export const db1 = drizzle(neonClient, { schema: { donations } });

// Export the schema for type inference
export { donations };


export const db2 = drizzle(neonClient, { schema: { helpline } });

export {helpline};