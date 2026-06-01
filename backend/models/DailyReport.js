const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const DailyReport = sequelize.define("DailyReport", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  workSummary: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  blockers: {
    type: DataTypes.TEXT,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

module.exports = DailyReport;