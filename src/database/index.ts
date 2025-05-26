import { PostgresDatabaseAdapter } from "@elizaos/adapter-postgres";

export function initializeDatabase() {
  const db = new PostgresDatabaseAdapter(); // no constructor args
  return db;
}
