// db/client.ts
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as dotenv from 'dotenv';

import { blogs, donations, helpline, pets } from './schema';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

// Ensure DATABASE_URL is defined
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in the environment variables.');
}

//hdfjdj fsvnfsvks
// Initialize Neon client
const neonClient = neon(process.env.DATABASE_URL);

// Setup Drizzle with all schemas
export const db = drizzle(neonClient, {
  schema: { blogs, donations, helpline, pets },
});

// Export individual schemas if needed elsewhere
export { blogs, donations, helpline, pets };

// Alias exports for db
export const db1 = db;
export const db2 = db;
