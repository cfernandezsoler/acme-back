import { Sequelize } from "sequelize";

const database = process.env.DB_NAME;
const host = process.env.DB_HOST;
const password = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;
const user = process.env.DB_USER;

const anyEmpty = [database, host, password, port, user].some(
  (value) => value == null
);
if (anyEmpty)
  throw new Error(
    "A variable from DB is not defined in the environment variables. Please check your .env file or env variables."
  );

const sequelize = new Sequelize(database!, user!, password!, {
  host: host!,
  port: Number(port!),
  dialect: "mysql",
});

export default sequelize;
