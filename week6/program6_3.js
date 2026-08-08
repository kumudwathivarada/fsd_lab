const express = require("express");

const server = express();
const PORT = 3000;

server.use(express.json());

// Custom Logger
server.use((req, res, next) => {
    const currentTime = new Date().toLocaleString();

    console.log(
        `[${currentTime}] ${req.method} request received for ${req.url}`
    );

    next();
});

// Temporary data
let todoItems = [
    { id: 1, title: "Study Node JS" },
    { id: 2, title: "Practice REST API" }
];

// GET - Display all items
server.get("/tasks", (req, res) => {
    res.json(todoItems);
});

// POST - Add a new item
server.post("/tasks", (req, res) => {

    const item = {
        id: req.body.id || todoItems.length + 1,
        title: req.body.title
    };

    todoItems.push(item);

    res.status(201).json(item);
});

// PUT - Modify an existing item
server.put("/tasks/:id", (req, res) => {

    const itemId = parseInt(req.params.id);

    const foundItem = todoItems.find(
        (element) => element.id === itemId
    );

    if (foundItem) {

        foundItem.title = req.body.title || foundItem.title;

        res.json({
            message: "Task updated successfully",
            updatedTask: foundItem
        });

    } else {

        res.status(404).json({
            message: "Task does not exist"
        });
    }
});

// DELETE - Remove an item
server.delete("/tasks/:id", (req, res) => {

    const itemId = parseInt(req.params.id);

    todoItems = todoItems.filter(
        (element) => element.id !== itemId
    );

    res.json({
        message: `Task ${itemId} removed successfully`,
        tasks: todoItems
    });
});

// Start server
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    console.log(`Open: http://localhost:${PORT}`);
    console.log("Waiting for client requests...");
});