import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const sequelizeDB = new Sequelize({
  database:process.env.DB_NAME,
  password:process.env.DB_PASSWORD,
  username:process.env.DB_USER,
  host: process.env.DB_HOST,
  port:process.env.DB_PORT,
  dialect:process.env.DB_DIALECT
  });  
    

export default sequelizeDB;
 