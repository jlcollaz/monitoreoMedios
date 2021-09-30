/**
 * Reading Environment Variables
 */
import { config } from "dotenv";
config();

export default {
  database: {
    connectionLimit: 10,
    host: process.env.DATABASE_HOST || "localhost",
    //user: process.env.DATABASE_USER || "test_mm",
    //password: process.env.DATABASE_PASSWORD || "Test_mm12345@",
    //database: process.env.DATABASE_NAME || "db_MM",
    // user: process.env.DATABASE_USER || "root",
    // password: process.env.DATABASE_PASSWORD || "root",
    user: process.env.DATABASE_USER || "jorge",
    password: process.env.DATABASE_PASSWORD || "password",
    database: process.env.DATABASE_NAME || "db_MM",
  },
  port: process.env.PORT || 4000,
};
