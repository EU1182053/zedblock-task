const express = require("express");


const { body, check, validationResult } = require("express-validator");
const { createTask, updateTask, deleteTask, getAllTasksByUserId,searchTasks } = require("../controller/taskController");
var router = express.Router();


router.post("/task/:userId/create", createTask);

router.get("/task/search", searchTasks)

router.put('/task/update/:employeeId', updateTask);

router.delete('/task/delete/:id', deleteTask)

router.get('/task/getAll/:userId', getAllTasksByUserId)


module.exports = router;
   