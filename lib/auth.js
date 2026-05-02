import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db();

export const auth = betterAuth({
  database: {
    provider: "mongodb",
    client,
    db,
  },
  emailAndPassword: {
    enabled: true,
  },
});