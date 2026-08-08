const express = require("express");

const app = express();

const PORT = 4000;

/*
 * 1. ROUTE PARAMETER
 * Example URL:
 * http://localhost:4000/student/25
 */

app.get("/student/:id", (req, res) => {

    const studentId = req.params.id;

    res.send(
        `<h2>Student Profile</h2>
         <p>You are viewing the profile of Student ID: <b>${studentId}</b></p>`
    );
});


/*
 * 2. MULTIPLE ROUTE PARAMETERS
 * Example URL:
 * http://localhost:4000/travel/hyderabad/goa
 */

app.get("/travel/:from/:to", (req, res) => {

    const fromCity = req.params.from;
    const toCity = req.params.to;

    res.send(
        `<h2>Travel Details</h2>
         <p>Searching for buses from <b>${fromCity}</b> to <b>${toCity}</b></p>`
    );
});


/*
 * 3. QUERY PARAMETERS
 * Example URL:
 * http://localhost:4000/search?category=books&sort=price
 */

app.get("/search", (req, res) => {

    const category = req.query.category;
    const sort = req.query.sort;

    res.json({
        message: "Search Results",
        category: category || "All",
        sorting: sort || "Default"
    });
});


app.listen(PORT, () => {
    console.log(`Dynamic server running at http://localhost:${PORT}`);
});