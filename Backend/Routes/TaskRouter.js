const { createTask, fetchAllTasks, UpdateTaskById, DeleteTaskById } = require("../Controllers/TaskController");

const router = require("express").Router();

//To get all the tasks
router.get("/", fetchAllTasks);

// To Create a Task
router.post("/", createTask);

// To Update Task
router.put("/:id", UpdateTaskById);

// To Delete Task
router.delete("/:id", DeleteTaskById);

module.exports = router;

