import { PostgresDatabaseAdapter } from "@elizaos/adapter-postgres";

export function initializeDatabase() {
  const connectionString = process.env.ELIZA_DATABASE_URL;

  if (!connectionString) {
    throw new Error("No database connection string found in ELIZA_DATABASE_URL");
  }

  return new PostgresDatabaseAdapter(connectionString);
}
