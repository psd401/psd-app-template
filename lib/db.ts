import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

if (!process.env.DATABASE_URL) {
  throw new Error('Missing env.DATABASE_URL');
}

const client = postgres(process.env.DATABASE_URL);
export const db = drizzle(client, { schema }); 