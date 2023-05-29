require('dotenv').config()
const Todo = require('../model/taskModel')

exports.createTask = async (req, res) => {
    const { userId } = req.params;
    const { title, description, state } = req.body;
    try {
        const todo = new Todo({
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
        const tasks = await Todo.find({
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

exports.getAllTasks = (req, res) => {


}

exports.getTaskById = (req, res) => {

}