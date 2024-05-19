import dotenv from "dotenv";

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;
const databasePort = process.env.DATABASE_PORT;
const databaseName = process.env.DATABASE_NAME;
const databaseUser = process.env.DATABASE_USER;
const databasePassword = process.env.DATABASE_PASSWORD;
const bcryptSaltRounds = process.env.BCRYPT_SALT_ROUNDS;

export {
  databaseUrl,
  databasePort,
  databaseName,
  databaseUser,
  databasePassword,
  bcryptSaltRounds,
};
