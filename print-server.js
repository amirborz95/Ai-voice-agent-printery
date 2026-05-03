const express = require("express");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.get("/", (req, res) => {
  res.send("Print server is running");
});

app.post("/print", (req, res) => {
  try {
    let text = "EMPTY ORDER";

    if (typeof req.body === "string") {
      text = req.body;
    } else if (req.body && req.body.text) {
      text = req.body.text;
    }

    const filePath = path.join(__dirname, "order.txt");
    fs.writeFileSync(filePath, text, "utf8");

    res.json({
      success: true,
      message: "Order received",
      printedText: text
    });

    exec(`notepad /p "${filePath}"`, (err) => {
      if (err) console.error("Print failed:", err);
      else console.log("Printed successfully");
    });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.listen(3001, "0.0.0.0", () => {
  console.log("Print server running on port 3001");
});
