const express = require("express");

const app = express();
const PORT = 3000;

// 1. Basic JSON Response
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to our API!",
        status: "Active",
        timestamp: new Date()
    });
});

// 2. Sending an Array of Objects
app.get("/students", (req, res) => {
    const studentList = [
        { id: 101, name: "Alice", course: "MERN Stack" },
        { id: 102, name: "Bob", course: "Data Science" },
        { id: 103, name: "Charlie", course: "UI/UX" }
    ];

    res.json(studentList);
});

// 3. Dynamic JSON Response
app.get("/product/:id", (req, res) => {
    const productId = req.params.id;

    const product = {
        requestedId: productId,
        category: "Electronics",
        inStock: true,
        tags: ["gadget", "new-arrival"]
    };

    res.json(product);
});

// Start server
app.listen(PORT, () => {
    console.log(`JSON Server is running at http://localhost:${PORT}`);
});