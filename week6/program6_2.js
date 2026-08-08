const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Mock Database
const tasks = [
    { id: 1, title: "Learn Express" },
    { id: 2, title: "Master REST APIs" }
];

// 1. GET - Read all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// 2. POST - Create a new task
app.post("/tasks", (req, res) => {
    const newTask = {
        id: req.body.id || tasks.length + 1,
        title: req.body.title
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

// 3. PUT - Update an existing task
app.put("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    task.title = req.body.title;

    res.json(task);
});

// 4. DELETE - Delete a task
app.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    tasks.splice(index, 1);

    res.json({
        message: `Task ${id} deleted successfully`,
        remainingTasks: tasks
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`REST API Server running at http://localhost:${PORT}`);
});