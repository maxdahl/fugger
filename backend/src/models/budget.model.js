const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Budget = sequelize.define(
  "budget",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { tableName: "budgets" }
);

module.exports = Budget;
