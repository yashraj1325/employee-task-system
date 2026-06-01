const express = require("express");
const {
  createTask,
  getTasks,
  updateTaskStatus,
} = require("../controllers/taskController");

const { protect, managerOnly } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, managerOnly, createTask);
router.get("/", protect, getTasks);
router.put("/:id/status", protect, updateTaskStatus);

module.exports = router;