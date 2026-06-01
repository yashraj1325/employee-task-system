const User = require("../models/User");
const Task = require("../models/Task");
const DailyReport = require("../models/DailyReport");

exports.getSummary = async (req, res) => {
  try {
    const users = await User.count();
    const tasks = await Task.count();
    const reports = await DailyReport.count();
    const completedTasks = await Task.count({ where: { status: "completed" } });

    res.json({
      totalUsers: users,
      totalTasks: tasks,
      totalReports: reports,
      completedTasks,
    });
  } catch (error) {
    res.status(500).json({ message: "Dashboard error", error: error.message });
  }
};