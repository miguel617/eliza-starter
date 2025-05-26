import { PostgresDatabaseAdapter } from "@elizaos/adapter-postgres";

export function initializeDatabase() {
  const connectionString = process.env.ELIZA_DATABASE_URL || process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("❌ No database connection string provided in env variables.");
  }

  const db = new PostgresDatabaseAdapter(connectionString);
  return db;
}
