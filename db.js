const Sequelize = require("sequelize");
const { STRING } = Sequelize;
require("dotenv").config();

console.log({
  dbname: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  pw: process.env.DATABASE_PASSWORD,
});

const db = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    dialect: process.env.DATABASE_DIALECT,
    host: process.env.DATABASE_HOST,
  }
);

// const setupRDSConnection = async () => {
//   try {
//     await db.authenticate();
//     console.log("Connected to RDS DB");
//   } catch (error) {
//     console.error("Not connected to RDS DB");
//   }
// };

const Information = db.define("information", {
  title: {
    type: STRING,
  },
  description: {
    type: STRING,
  },
});

module.exports = { db, Information };
