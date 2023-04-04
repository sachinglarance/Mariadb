const DataTypes = require("sequelize");
const sequelize = require("../config/database");

const user_details = sequelize.define(
  "user_details",
  {
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  },
  { tableName: "user_details" }
);
module.exports = user_details;
