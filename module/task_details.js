const DataTypes = require("sequelize");
const sequelize = require("../config/database");

const task_details = sequelize.define(
  "task_details",
  {
    task_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    task_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // user_id: {
    //   type: DataTypes.BIGINT,
    //   allowNull: false,
    //   references: {
    //     model: "user_details",
    //     key: "user_id",
    //   },
    // },
  },
  {
    timestamps: false,
  },
  { tableName: "task_details" }
);
// tasks.belongsTo(tasks, { foreignKey: "user_id" });
module.exports = task_details;
