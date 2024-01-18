import { Sequelize } from 'sequelize';

const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;

const anyEmpty = [user, password, host].some((value) => !value);
if (!anyEmpty) throw new Error('DB_NAME is not defined in the environment variables. Please check your .env file or env variables.');

const sequelize = new Sequelize(database!, user!, password!, {
  host: host!,
  dialect: 'mysql',
});

export default sequelize;
