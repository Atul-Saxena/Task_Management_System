import Tasks from "../models/task.model.js";

const createTask = async (req, res) => {
    const { title, description, status, priority, dueDate, assignedTo } = req.body;
    try {
        const task = await Tasks.create({ title, description, status, priority, dueDate, assignedTo });
        res.status(200).json(task);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};

const getmytasks = async (req, res) => {
    const { id } = req.params;
    try {
        const tasks = await Tasks.find({ assignedTo: id });
        res.status(200).json(tasks);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
}

const getOneTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Tasks.findById(id);
        res.status(200).json(task);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Tasks.find();
        res.status(200).json(tasks);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, status, priority, dueDate, assignedTo } = req.body;
    try {
        const task = await Tasks.findByIdAndUpdate(id, { title, description, status, priority, dueDate, assignedTo }, { new: true });
        res.status(200).json(task);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Tasks.findByIdAndDelete(id);
        res.status(200).json(task);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};

export { createTask, getAllTasks, getOneTask, updateTask, deleteTask,getmytasks };