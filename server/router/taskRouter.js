const express = require("express");


const { body, check, validationResult } = require("express-validator");
const { createTask, updateTask, deleteTask, getAllTasks, getTaskById, searchTasks } = require("../controller/taskController");
var router = express.Router();


router.post("/task/:userId/create", createTask);

router.get("/task/search", searchTasks)

router.put('/task/update/:employeeId', updateTask);

router.delete('/task/delete/:id', deleteTask)

router.get('/task/getAll', getAllTasks)

router.get('/task/getById/:id', getTaskById)

module.exports = router;
   