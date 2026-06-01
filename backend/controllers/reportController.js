const DailyReport = require("../models/DailyReport");

exports.submitReport = async (req, res) => {
  try {
    const { workSummary, blockers, date } = req.body;

    const report = await DailyReport.create({
      userId: req.user.id,
      workSummary,
      blockers,
      date,
    });

    res.status(201).json({
      message: "Report submitted successfully",
      report,
    });
  } catch (error) {
    res.status(500).json({ message: "Report error", error: error.message });
  }
};

exports.getReports = async (req, res) => {
  try {
    const reports = await DailyReport.findAll();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: "Get reports error", error: error.message });
  }
};