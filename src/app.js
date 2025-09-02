require("dotenv").config();
const express = require("express");
const connectDB = require("./db/db");
const applyMiddleware = require("./middleware");

const app = express();

applyMiddleware(app);

app.get("/health", (_req, res) => {
  res.status(200).json({
    health: "OK",
  });
});

// connect to MongoDB
connectDB().then(() => {
  app.listen(4000, () => {
    console.log("Server is listening on port 4000");
  });
});
