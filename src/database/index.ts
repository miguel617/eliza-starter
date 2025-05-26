import { PostgresDatabaseAdapter } from "@elizaos/adapter-postgres";

export function initializeDatabase() {
  const connectionString = process.env.ELIZA_DATABASE_URL || process.env.POSTGRES_URL;
  
  if (!connectionString) {
    throw new Error("Missing ELIZA_DATABASE_URL or POSTGRES_URL for Postgres adapter.");
  }

  const db = new PostgresDatabaseAdapter({ connectionString });
  return db;
}
