import {dbconfig} from './dbconfig';
const { Sequelize } = require ('sequelize');



export const sequelize = new Sequelize({
  database: dbconfig.database,
  dialect: dbconfig.dialect,
  username: dbconfig.username,
  password: dbconfig.password,
  host: dbconfig.host,
  port: dbconfig.port
});

const initModels = require('./models/init-models').initModels;
const models = initModels(sequelize);

const tasks = models.tasks;

sequelize.authenticate().then(() => {
  console.log('Connected to DB (test)');
})
  .catch((err) => {
    console.log(err);
  });

// this is for testing purposes


// sync with database
function initializeDatabase() {
  sequelize
    .sync()
    .then(() => {
      console.log('Connection synced!!!');
      return;
    })
    .catch(err => {
      console.log('err');
    });
}





