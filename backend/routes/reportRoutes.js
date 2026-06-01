const express = require("express");
const { submitReport, getReports } = require("../controllers/reportController");
const { protect, managerOnly } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, submitReport);
router.get("/", protect, managerOnly, getReports);

module.exports = router;