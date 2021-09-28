/**
 * Reading Environment Variables
 */
import { config } from "dotenv";
config();

export default {
  database: {
    connectionLimit: 10,
    host: process.env.DATABASE_HOST || "us-cdbr-east-04.cleardb.com",
    user: process.env.DATABASE_USER || "b239329977702e",
    password: process.env.DATABASE_PASSWORD || "94e963d4",
    database: process.env.DATABASE_NAME || "heroku_84279390f2c6bba",
  },
  port: process.env.PORT || 4000,
};
