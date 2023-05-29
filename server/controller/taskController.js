require('dotenv').config()
const Task = require('../model/taskModel')
var ObjectId = require('mongodb').ObjectId;
exports.createTask = async (req, res) => {
    const { userId } = req.params;
    const { title, description, state } = req.body;
    try {
        const todo = new Task({
            title,
            description,
            state,
            user: userId,
        });
        await todo.save();
        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the task' });
    }


}

// Search for tasks
exports.searchTasks = async (req, res) => {
    const { search } = req.query;
    try {
        const tasks = await Task.find({
            $or: [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
            ],
        });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while searching for tasks' });
    }
};

exports.updateTask = (req, res) => {


}

exports.deleteTask = (req, res) => {

}

exports.getAllTasksByUserId = async (req, res) => {
    try {
        var userId = new ObjectId(req.params.userId)
        

        // Find tasks by user ID
        const tasks = await Task.find({ user: userId });

        res.json({ tasks, "Success": true });
    } catch (error) {
        console.error('Failed to fetch tasks:', error);
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }

}

exports.getTaskById = (req, res) => {

} 