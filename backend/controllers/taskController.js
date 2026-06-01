const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    const { title, description, assignedTo, deadline } = req.body;

    const task = await Task.create({
      title,
      description,
      assignedTo,
      deadline,
    });

    res.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({ message: "Task creation error", error: error.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    let tasks;

    if (req.user.role === "manager") {
      tasks = await Task.findAll();
    } else {
      tasks = await Task.findAll({
        where: { assignedTo: req.user.id },
      });
    }

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Get tasks error", error: error.message });
  }
};

exports.updateTaskStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const task = await Task.findByPk(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.status = status;
    await task.save();

    res.json({
      message: "Task status updated",
      task,
    });
  } catch (error) {
    res.status(500).json({ message: "Update error", error: error.message });
  }
};