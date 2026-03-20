require("dotenv").config()

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
    next();
});

app.get("/", (req, res) => {
    res.send("My Week 2 API from Opeyemi");
});

app.get("/user/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.send(id);
});

app.post("/user", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ Error: `Missing fields` });
    res.status(200).json({ Respond: `Hello, ${name} with email: ${email}` });
    res.json({ echo: req.body });
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});