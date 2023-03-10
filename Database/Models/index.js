const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
require("dotenv").config();
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
// eslint-disable-next-line import/no-dynamic-require
const config = require(`../../Configs/database.config.js`)[env];
const db = {};
let sequelize;
sequelize = new Sequelize({
  dialect: "postgres",
  url: process.env.DB_URL,
  host: process.env.PGHOST,
  username: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
});

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// relationships for models

//= ==============================
// Define all relationships here below
//= ==============================
// db.User.hasMany(db.Address);
// db.Address.belongsTo(db.User);

module.exports = db;
