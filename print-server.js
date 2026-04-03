const express = require("express");
const bodyParser = require("body-parser");
const { exec } = require("child_process");
const fs = require("fs");

const app = express();
app.use(bodyParser.json());

app.post("/print", (req, res) => {
    const { text } = req.body;

    fs.writeFileSync("order.txt", text);

    exec('notepad /p order.txt', (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Print failed");
        }
        res.send("Printed");
    });
});

app.listen(3001, () => {
    console.log("Print server running on port 3001");
});