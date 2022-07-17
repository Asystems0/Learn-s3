const express = require("express");
const app = express();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const { uploadFile } = require("./s3");

app.get("/", (req, res) => {
  res.send("HI");
});

app.post("/images", async (req, res) => {
  const file = req.file;
  console.log(file);
  const result = await uploadFile(file);
  console.log(result);
  const description = req.body.description;
  res.send("Success");
});

app.listen(3000, () => {
  console.log("App running in: http://localhost:3000/");
});
