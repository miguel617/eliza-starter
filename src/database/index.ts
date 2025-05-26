import { PostgresDatabaseAdapter } from "@elizaos/adapter-postgres";

export function initializeDatabase() {
  const connectionString = process.env.ELIZA_DATABASE_URL;

  if (!connectionString) {
    throw new Error("Missing ELIZA_DATABASE_URL for Postgres adapter.");
  }

  const db = new PostgresDatabaseAdapter(connectionString);
  return db;
}
