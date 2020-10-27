import Sequelize from 'sequelize';
import {dbconfig} from './config';



export const sequelize = new Sequelize({
  database: dbconfig.database,
  dialect: dbconfig.dialect,
  username: dbconfig.username,
  password: dbconfig.password,
  host: dbconfig.host,
  port: dbconfig.port
});


sequelize.authenticate().then(() => {
  console.log('connected to DB');
}).catch((err) => {
  console.log('error while conncting to database: ', err);
});
