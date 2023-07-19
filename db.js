const Sequelize = require("sequelize");
console.log("sequelize", Sequelize);
const { STRING } = Sequelize;

const db = new Sequelize(
  process.env.DATABASE_URL || "postgresql://localhost/ec2-test"
);

const Information = db.define("information", {
  title: {
    type: STRING,
  },
  description: {
    type: STRING,
  },
});

module.exports = { db, Information };
