const express = require("express");

const app = express();

const PORT = 4000;

// Home Route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to My Express Server</h1>");
});

// About Route
app.get("/about", (req, res) => {
    res.send("<h2>This is the About Page</h2>");
});

// Contact Route
app.get("/contact", (req, res) => {
    res.send("<h2>Contact us at example@gmail.com</h2>");
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});