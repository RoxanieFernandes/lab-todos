import express from "express";
import './db/index.js'

const app = express();

app.get("/", (req, res) => {
  res.send("Está funcionando");
});
app.listen(5000, () => {
  console.log("server running");
});
